import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../public/firebase_init'

export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const signup = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = ()=>{
            onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser)
                setLoading(false)
            } )
        }
        return ()=> unsubscribe()
    },[])
    const AuthInfo = {
        signup,
        signIn,
        signout,
        user,
        loading,
        setUser,
        setLoading
    }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

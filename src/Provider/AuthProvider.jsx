import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../public/firebase_init'

export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [loading, setLoading] = useState(true)
    const signup = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      
    }
    const userProfileUpdate =(name, photo)=>{
        setLoading(true)
      return  updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
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

 

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    const AuthInfo = {
        signup,
        signIn,
        signout,
        user,
        loading,
        setUser,
        setLoading,
        toggleTheme,
        theme,
        userProfileUpdate,
 
    }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {  children}
      </AuthContext.Provider>
    </div>
  )
}

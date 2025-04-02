import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
  const  location = useLocation()
    if(loading){
        return <p>...Loading</p>
    }
    if(user){
        return children;
    }
  return(
    <div>
        <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  )
}

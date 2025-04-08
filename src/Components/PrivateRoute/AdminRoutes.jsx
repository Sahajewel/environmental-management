import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import UseAdmin from '../../HOOKS/UseAdmin/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';

export default function AdminRoutes({children}) {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoadng] = UseAdmin()
    const location = useLocation()
    if(loading || isAdminLoadng){
        return <p>Loading....</p>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to="/" state={location.pathname}></Navigate>
}

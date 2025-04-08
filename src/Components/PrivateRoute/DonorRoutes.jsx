import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import UseDonor from '../../HOOKS/UseDonor/UseDonor';
import { Navigate, useLocation } from 'react-router-dom';

export default function DonorRoutes({children}) {
    const {user, loading} = useContext(AuthContext);
    const [isDonor, isDonorLoading] = UseDonor();
    const location = useLocation()
    if(loading || isDonorLoading){
        return <p>Loading...</p>
    }
    if(user && isDonor){
        return children
    }

  return <Navigate to="/" state={location.pathname}></Navigate>
}

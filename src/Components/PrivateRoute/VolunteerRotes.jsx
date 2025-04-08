import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import UseVolunteer from '../../HOOKS/UseVolunteer/UseVolunteer';
import { Navigate, useLocation } from 'react-router-dom';

export default function VolunteerRotes({children}) {
    const {user, loading} = useContext(AuthContext);
    const [isVolunteer,  isVolunteerLoading] = UseVolunteer();
    const location = useLocation()
    if(loading || isVolunteerLoading){
        return <p>loading...</p>
    }
    if(user && isVolunteer){
        return children
    }
  return <Navigate to="/" state={location.pathname}></Navigate>
}

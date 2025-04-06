import React from 'react'
import UseAdmin from '../HOOKS/UseAdmin/UseAdmin'
import UseVolunteer from '../HOOKS/UseVolunteer/UseVolunteer';
import UseDonor from '../HOOKS/UseDonor/UseDonor';
import { Navigate } from 'react-router-dom';


export default function DefaultDashboard() {

  const [isAdmin] = UseAdmin();
  const [isVolunteer] = UseVolunteer();
  const [isDonor] = UseDonor();
  if(isAdmin){
   return <Navigate to="overview" replace/>
  }else if(isVolunteer){
    return <Navigate to="available-events" replace/>
  }else if(isDonor){
    return <Navigate to="my-donation" replace/>
  }
  return <p>loading....</p>
}

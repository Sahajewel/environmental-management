import React, { useContext } from 'react'
import {  NavLink } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query'

import DarkLightMood from '../DarkLightMood/DarkLightMood'

export default function Navbar() {
  const queryClient = useQueryClient()
  const {signout, user} = useContext(AuthContext)
  
  const log=()=>{
    signout()
   
    .then(()=>{
     axios.post("http://localhost:5000/logout",{},{
      withCredentials:true
     })
     queryClient.clear()
    console.log("loogged out")
    })

  }
 
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/">Home</NavLink>
             <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/about">About</NavLink>
             <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/products">Products</NavLink>
             <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/mobile">Mobile</NavLink>
             <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/dashboard">Dashboard</NavLink>
           <DarkLightMood></DarkLightMood>
       
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
         <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/">Home</NavLink>
         <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/about">About</NavLink>
         <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/products">Products</NavLink>
         <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/mobile">Mobile</NavLink>
         <NavLink className={({isActive})=>isActive? "mr-5 bg-red-500 text-gray-500":"mr-5"} to="/dashboard">Dashboard</NavLink>
        <DarkLightMood></DarkLightMood>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?<div>
            
             <button  onClick={log} className="mr-5 cursor-pointer">Logout</button>
          </div>
          :
          <div>
             <NavLink className="mr-5" to="/login">Login</NavLink>
             <NavLink className="mr-5" to="/register">Register</NavLink>
          </div>
        }
     
     
      </div>
    </div>
  )
}

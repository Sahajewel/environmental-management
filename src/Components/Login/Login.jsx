import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Provider/AuthProvider'
import {  useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const {
            register,
            handleSubmit,
         
            formState: { errors },
          } = useForm()
          const onsubmit=(data)=> {
            signIn(data.email, data.password)
            .then(()=>{
                alert("successfully Login")
                const user = {email: data.email}
                axios.post("http://localhost:5000/jwt", user, {
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data)
                })
                navigate(location?.state?location.state: "/")

            })
            .catch((errors)=>{
                alert("login failed", errors)
            })
            console.log(data)
          }
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-100.5px)]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                  
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input {...register("email")} type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input {...register("password")} type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

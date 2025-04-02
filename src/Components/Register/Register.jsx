import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Provider/AuthProvider'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Register() {
  const { signup } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    signup(data.email, data.password)
      .then(() => {
        console.log("Successfully registered")
        navigate(location?.state? location.state:"/")

        const userProfile = {
          email: data.email,
        }

        axios.post("http://localhost:5000/users", userProfile)
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.error("Error during user registration:", err)
            alert("Registration error: " + err.message) // Error message display
          })
      })
      .catch((error) => {
        console.error("Signup error:", error)
        alert("Registration failed. Please try again.")
      })
      
    console.log(data)
  }

  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-100.5px)]">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                {...register("email")}
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                {...register("password")}
                type="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Provider/AuthProvider'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import UseAxiosPublic from '../../HOOKS/UseAxxiosPublic/UseAxiosPublic'
import { auth } from '../../../public/firebase_init'


const imageBBApi = "7cf4f4b065d1282977144682c2b23948";
const imageBBUpload = `https://api.imgbb.com/1/upload?key=${imageBBApi}`
export default function Register() {
  const { signup, userProfileUpdate,setUser,   } = useContext(AuthContext);
  const axiosPublic= UseAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
const fileBB = {image: data.image[0]}
const res = await axiosPublic.post(imageBBUpload,fileBB,{
  headers: {
    "content-type": "multipart/form-data"
}
})
console.log(res.data)
    signup(data.email, data.password)
      .then((result) => {
        console.log(result.user)
       
        userProfileUpdate(data.name, res.data.data.display_url)
        .then((result)=>{
          console.log(result)
          auth.currentUser.reload()
          setUser(auth.currentUser)
        
          
          const userProfile = {
            email: data.email,
            name: data.name,
            photo: res.data.data.display_url,
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
        })
        navigate(location?.state? location.state:"/")
      

       

      
      .catch((error) => {
        console.error("Signup error:", error)
        alert("Registration failed. Please try again.")
      })
      
    console.log(data)
  }

  return (
    <div className="hero  min-h-[calc(100vh-100.5px)]">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label className="">Name</label>
              <input
                {...register("name")}
                type="text"
                className="border p-4"
                placeholder="name"
              />
               <label  className="">Photo</label>
              <input {...register("image")} type="file" className="file-input file-input-accent  text-violet-400" />
              <label className="">Email</label>
              <input
                {...register("email")}
                type="email"
                className="border p-4"
                placeholder="Email"
              />
              <label className="">Password</label>
              <input
                {...register("password")}
                type="password"
                className="border p-4"
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
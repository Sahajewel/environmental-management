import React, { useEffect, useRef, useState } from 'react'
import UseAxiosPublic from '../../HOOKS/UseAxxiosPublic/UseAxiosPublic'
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';


const imageBBApi = "7cf4f4b065d1282977144682c2b23948";
const imageBBUpload = `https://api.imgbb.com/1/upload?key=${imageBBApi}`
export default function UserProfile() {
  const axiosPublic = UseAxiosPublic();
  const [mongoUser, setMongoUser] = useState(null);
  const modalRef = useRef(null)

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const onsubmit = async(data) => {
    
    // console.log(data)
    try{
      if(data.image && data.image[0]){
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const imageResponse = await fetch(imageBBUpload, {
          method:'POST',
          body: formData
        })
        const imgbbData = await imageResponse.json();
        if(imgbbData.success){
         const updateData = {
          name: data.name,
          photo: imgbbData.data.url
         }
         const response = await fetch("http://localhost:5000/users-profile-update",{
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            
          },
          credentials: 'include',
          body: JSON.stringify(updateData)
        })
        const result = await response.json()
        if(result.success){
          console.log("successfully updated")
          modalRef.current.close();
          window.location.reload();
        }
        else{
          console.log("failed to updated")
        }
  
        }
        }
      }
      
      catch(error){
        console.log("error", error)
      }
    }
  
  useEffect(() => {
    const fetchUser = async () => {
     
      try {
        const res = await axiosPublic.get("/users-profile", { withCredentials: true })
        console.log(res.data)
        setMongoUser(res.data)
      }
      catch (error) {
        console.log("error", error)
      }
    }
    fetchUser()
  }, [axiosPublic])
  return (
    <div>
      <h2 className='text-center text-6xl font-bold py-20'>User Profile</h2>
      {mongoUser ? (
        <div className='flex justify-center flex-col items-center space-y-4'>
          <p><strong>Name:</strong> {mongoUser?.name}</p>
          <p><strong>Email:</strong> {mongoUser?.email}</p>
          <img className='w-20 h-20' src={mongoUser?.photo} alt="" />

        </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Updated Profile</button>
      <dialog id="my_modal_1" ref={modalRef} className="modal">
        <div className="modal-box">

          <div className="modal-action">
            <form onSubmit={handleSubmit(onsubmit)} method="dialog">
              <label >Update Name</label>
              <input {...register("name")} type="text" placeholder="Type here" className="input" />
              <label>Update profile</label>
              <input {...register("image")} type="file" className="file-input" />
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" type='submit'>Submit</button>
              
            </form>
            
          </div>
        </div>
      </dialog>
    </div>
  );
}


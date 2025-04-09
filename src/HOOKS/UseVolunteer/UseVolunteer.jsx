import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import UseAxiosSecure from '../UseAxiosSecure/UseAxiosSecure'

export default function UseVolunteer() {
 const {user} = useContext(AuthContext)
 const axiosSecure = UseAxiosSecure()
 const{data: isVolunteer, isPending: isVolunteerLoadng} = useQuery({
    queryKey: [user?.email, "isVolunteer"],
    enabled:!!user?.email,
    queryFn: async()=>{
      const res = await axiosSecure.get(`/volunnteer/dashboard/${user?.email}`,{withCredentials: true})
        return res.data?.isVolunteer
    }
    
 })
 return [isVolunteer, isVolunteerLoadng]
}


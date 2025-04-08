import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function UseVolunteer() {
 const {user} = useContext(AuthContext)
 const{data: isVolunteer, isPending: isVolunteerLoadng} = useQuery({
    queryKey: [user?.email, "isVolunteer"],
    staleTime: 1000 * 60 * 5,
    enabled:!!user?.email,
    queryFn: async()=>{
      const res = await axios.get(`http://localhost:5000/volunnteer/dashboard/${user?.email}`,{withCredentials: true})
        return res.data?.isVolunteer
    }
    
 })
 return [isVolunteer, isVolunteerLoadng]
}


import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function UseAdmin() {
 const {user} = useContext(AuthContext)
 const{data: isAdmin, isPending: isAdminLoadng} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    staleTime: 1000 * 60 * 5,
    enabled:!!user?.email,
    queryFn: async()=>{
      const res = await axios.get(`http://localhost:5000/admin/dashboard/${user?.email}`,{withCredentials: true})
        return res.data?.isAdmin
    }
    
 })
 return [isAdmin, isAdminLoadng]
}


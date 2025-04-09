import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'

import UseAxiosSecure from '../UseAxiosSecure/UseAxiosSecure';

export default function UseAdmin() {
 const {user} = useContext(AuthContext);
 const axiosSecure = UseAxiosSecure()
 const{data: isAdmin, isPending: isAdminLoadng} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled:!!user?.email,
    queryFn: async()=>{
      const res = await axiosSecure.get(`/admin/dashboard/${user?.email}`,{withCredentials: true})
        return res.data?.isAdmin
    }
    
 })
 return [isAdmin, isAdminLoadng]
}


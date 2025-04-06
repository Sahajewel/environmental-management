import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function UseAdmin() {
 const {user} = useContext(AuthContext)
 const{data: isAdmin, refetch} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled:!!user?.email,
    queryFn: async()=>{
      const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`)
        return res.data?.admin
    }
    
 })
 return [isAdmin, refetch]
}


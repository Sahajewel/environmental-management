import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function UseDonor() {
 const {user} = useContext(AuthContext)
 const {data: isDonor,  isPending: isDonorLoading} = useQuery({
    queryKey: [user?.email, "isDonor"],
    staleTime: 1000 * 60 * 5,
    enabled: !!user?.email,
    queryFn: async()=>{
        const res = await axios.get(`http://localhost:5000/donor/dashboard/${user?.email}`,{withCredentials: true})
        return res.data?.isDonor
    }
 })
 return [isDonor, isDonorLoading]
}

import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import UseAxiosSecure from '../UseAxiosSecure/UseAxiosSecure';

export default function UseDonor() {
 const {user} = useContext(AuthContext);
 const axiosSecure = UseAxiosSecure()
 const {data: isDonor,  isPending: isDonorLoading} = useQuery({
    queryKey: [user?.email, "isDonor"],
    enabled: !!user?.email,
    queryFn: async()=>{
        const res = await axiosSecure.get(`/donor/dashboard/${user?.email}`,{withCredentials: true})
        return res.data?.isDonor
    }
 })
 return [isDonor, isDonorLoading]
}

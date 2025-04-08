import  { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export default function UseRoles() {
    const {user} = useContext(AuthContext)
    const {data: roles = {},}= useQuery({
        queryKey: [user?.email, "roles"],
        enabled: !!user?.email,
        queryFn:async()=>{
            const res =await axios.get(`http://localhost:5000/users/roles/${user?.email}`,{
                withCredentials:true})
            return res.data
        }
      
    })
    console.log(roles)
    return [roles]
}
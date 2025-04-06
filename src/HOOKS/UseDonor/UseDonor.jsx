import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function UseDonor() {
 const {user} = useContext(AuthContext)
 const {data: isDonor, isLoading, refetch} = useQuery({
    queryKey: [user?.email, "isDonor"],
    enabled: !!user?.email,
    queryFn: async()=>{
        const res = await axios.get(`http://localhost:5000/users/donor/${user?.email}`)
        return res.data?.donor
    }
 })
 return [isDonor, refetch]
}

import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function UseVolunteer() {
 const {user} = useContext(AuthContext);
 const {data: isVolunteer,  refetch} = useQuery({
    queryKey:[user?.email, "isVolunteer"],
    enabled:!!user?.email,
    queryFn: async()=>{
        const res = await axios.get(`http://localhost:5000/users/volunteer/${user?.email}`)
        return res.data?.volunteer
    }
 })
 return [isVolunteer,  refetch]
}

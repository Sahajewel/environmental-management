import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export default function UseUsers() {
    const {data: users} = useQuery({
        queryKey:["users"],
        queryFn: async()=>{
            const res = await axios.get("http://localhost:5000/users", {withCredentials: true})
            console.log(res.data)
            return res.data
        }
    })
  return [users]
}

import { useQuery } from '@tanstack/react-query'
import UseAxiosPublic from '../UseAxxiosPublic/UseAxiosPublic'

export default function UseMobile() {
    const axiosPublic = UseAxiosPublic();
    const {data: mobileData=[],}= useQuery({
        queryKey:["mobiles"],
        queryFn:async()=>{
            const res = await axiosPublic.get("/mobile", {
                withCredentials:true
            })
            return res.data
        }
    })
  
  return [mobileData]
}

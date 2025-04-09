import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})
export default function UseAxiosSecure() {
    const {signout} = useContext(AuthContext);
    const navigate = useNavigate();

  axiosSecure.interceptors.request.use(function(config){
    return config
  },
  function(error){
    return Promise.reject(error)
  }
);
axiosSecure.interceptors.response.use(function(response){
    return response
}, async(error)=>{
    const status =await error.response?.status;
    if(status === 401 || status === 403){
        // await signout();
        navigate("/")
    }
    return Promise.reject(error)
})

    return axiosSecure
}

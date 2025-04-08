import { Navigate } from 'react-router-dom';
import UseRoles from '../HOOKS/UseRoles/UseRoles';


export default function DefaultDashboard() {
const [roles] = UseRoles()
console.log(roles)

  if(roles.admin){
   return <Navigate to="overview" replace/>
  }else if(roles.volunteer){
    return <Navigate to="available-events" replace/>
  }else if(roles.donor){
    return <Navigate to="my-donation" replace/>
  }
  return <p>loading....</p>
}

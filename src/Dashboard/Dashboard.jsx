import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar.sx/Navbar'
import UseRoles from '../HOOKS/UseRoles/UseRoles';


export default function Dashboard() {
    
const [roles] = UseRoles()
const {admin, volunteer,donor} = roles
console.log(roles)
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex min-h-screen'>
                <div className='w-1/3 bg-gray-300 text-black text-center mr-10'>
                    {admin && <div>
                        <NavLink to="overview">Overview</NavLink>
                    </div>}
                    {volunteer && <div>
                        <NavLink to="available-events">Available-events</NavLink>
                    </div>}
                    {donor && <div className='flex flex-col'>
                        <NavLink to="my-donation">My Donation</NavLink>
                        <NavLink to="donate">Donate Now</NavLink>
                    </div>}
                </div>
                <div className='w-2/3'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import UseAdmin from '../HOOKS/UseAdmin/UseAdmin'
import UseVolunteer from '../HOOKS/UseVolunteer/UseVolunteer'
import UseDonor from '../HOOKS/UseDonor/UseDonor'
import Navbar from '../Components/Navbar.sx/Navbar'


export default function Dashboard() {
    const { user, setLoading, loading } = useContext(AuthContext);
    const [isAdmin, refetchAdmin] = UseAdmin(); // Get the refetch function
    const [isVolunteer, refetchVolunteer] = UseVolunteer(); // Get the refetch function
    const [isDonor, refetchDonor] = UseDonor(); // Get the refetch function
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !loading) {
            navigate("/login");
        } else {
            setLoading(false);
        }
    }, [user, navigate, setLoading, loading]);

    useEffect(() => {
        if (user?.email) {
           refetchAdmin();
           refetchVolunteer();
           refetchDonor()
        }
    }, [user?.email, refetchAdmin, refetchVolunteer, refetchDonor]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex min-h-screen'>
                <div className='w-1/3 bg-gray-300 text-black text-center mr-10'>
                    {isAdmin && <div>
                        <NavLink to="overview">Overview</NavLink>
                    </div>}
                    {isVolunteer && <div>
                        <NavLink to="available-events">Available-events</NavLink>
                    </div>}
                    {isDonor && <div className='flex flex-col'>
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

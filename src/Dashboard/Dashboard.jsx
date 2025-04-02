import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    let content;
    if (user?.role === "admin") {
        content = (
            <div>
                <NavLink to="/dashboard/overview">Overview</NavLink>
            </div>
        )
    } 
    else if (user?.role === "volunteer") {
        content = (
            <div>
                <NavLink to="/dashboard/available-events">Available Events</NavLink>
            </div>
        )
    } 
    else if (user?.role === "donor") {
        content = (
            <div>
                <NavLink to="/dashboard/my-donation">My Donation</NavLink>
            </div>
        )
    }

    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

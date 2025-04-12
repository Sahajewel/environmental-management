import React from 'react'
import Navbar from '../Components/Navbar.sx/Navbar'
import Footer from '../Components/Foooter/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white"> 
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-82.5px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

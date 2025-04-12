import React from 'react'
import UseMobile from '../../HOOKS/UseMobile/UseMobile'
import { Link } from 'react-router-dom';


export default function Mobile() {
    const [mobileData] = UseMobile();
   
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-black">Mobile List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mobileData.map((mobile) => (
                    <div
                        key={mobile?.id}
                        className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">
                            {mobile?.mobileBrand}
                        </h2>
                        <p className="text-gray-600">Owner: {mobile?.owner}</p>
                        <p className="text-gray-600">Country: {mobile?.country}</p>
                        <p className="text-green-600 font-bold">Price: ${mobile?.price}</p>
                        <Link to={`/mobile/${mobile?._id}`} className='text-white my-3 btn '>Pay Details</Link>
                    </div>
                ))}
            </div>
           
        </div>
    );
}

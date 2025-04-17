import React, { useState } from 'react'
import UseMobile from '../../HOOKS/UseMobile/UseMobile'
import { Link } from 'react-router-dom';


export default function Mobile() {
    const [mobileData] = UseMobile();
    const [searchMethod, setSearchMethod] = useState([])

    const handleSearch = (e)=>{
        const result = e.target.value.toLowerCase()
        const single = mobileData.filter((sin)=>
        sin.mobileBrand.toLowerCase().includes(result)
        )
        setSearchMethod(single)
        
    }
    const mobilesShow = searchMethod.length > 0 ? searchMethod : mobileData
   
    return (
        <div className="p-6  min-h-screen ">
            <h1 className="text-3xl font-bold mb-6 text-center text-black">Mobile List</h1>
              <input  onKeyUp={handleSearch}  type="text" className="border p-4" placeholder="search" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mobilesShow.map((mobile) => (
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

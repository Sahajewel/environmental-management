import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Payment from '../Payment/Payment'


export default function MobileCard() {
    const loader = useLoaderData()
    console.log(loader)
  return (
    <div className=' flex items-center justify-center  min-h-[calc(100vh-85px)] text-center '>
       <div
                       
                        className="bg-white max-w-[600px] w-[80%]  p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">
                            {loader?.mobileBrand}
                        </h2>
                        <p className="text-gray-600">Owner: {loader?.owner}</p>
                        <p className="text-gray-600">Country: {loader?.country}</p>
                        <p className="text-green-600 font-bold">Price: ${loader?.price}</p>
                     <Payment mobile={loader}></Payment>
                    </div>
    </div>
  )
}

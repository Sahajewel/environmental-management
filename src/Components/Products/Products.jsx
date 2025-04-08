
import React, { useEffect, useState } from 'react'
import UseAxiosSecure from '../../HOOKS/UseAxiosSecure/UseAxiosSecure'

export default function Products() {
  const axiosSecure = UseAxiosSecure()
const [products, setProducts] = useState([])
useEffect(()=>{
    axiosSecure.get("/products")
.then((res)=>{
    setProducts(res.data)
})
.catch(err=>{
  console.log("error fetching products", err)
})
},[axiosSecure])
  return (
    <div>
      {
        products.map((product, index)=>(
            <div  key={product._id || index}>
                <h1 className='text-center'>{product?.name}</h1>
            </div>
        ))
      }
    </div>
  )
}

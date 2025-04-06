import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Products() {
const [products, setProducts] = useState([])
useEffect(()=>{
    axios.get("http://localhost:5000/products")
.then((res)=>{
    setProducts(res.data)
})
},[])
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

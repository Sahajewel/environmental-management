import React from 'react'
import UseUsers from '../../HOOKS/UseUsers/UseUsers'

export default function Users() {
    const [users] = UseUsers()
   
  return (
    <div className='text-center text-4xl'>
      {users.length}
    </div>
  )
}

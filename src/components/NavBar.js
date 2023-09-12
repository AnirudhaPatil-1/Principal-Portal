import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-stone-300 py-7'>
        <ul className='flex justify-end items-center gap-7 text-sm font-medium mt-7'>
          <li className='text-emerald-500 border-b-2 border-emerald-500 text-sm font-medium'>Home</li>
          <li className='text-sm font-medium'>Job Aids</li>
          <li className=' w-28 h-12 bg-emerald-500 rounded-full text-white text-sm font-medium p-2  mr-20 block flex justify-center items-center'>Login</li>
        </ul>
      
    </div>
  )
}

export default NavBar
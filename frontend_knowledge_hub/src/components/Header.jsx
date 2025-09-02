import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-col justify-between items-center p-4 bg-gray-800 text-white'>
        <h1 className='text-3xl font-bold'>Knowledge Hub</h1>
        <nav className='mt-2'>
            <ul className='flex space-x-4'>
                <li><Link to={"/"} className='hover:underline'>Home</Link></li>
                <li><Link to={"/"} className='hover:underline'>About</Link></li>
                <li><Link to={"/login"} className='hover:underline'>Login</Link></li>
               
            </ul>
        </nav>
      
    </div>
  )
}

export default Header

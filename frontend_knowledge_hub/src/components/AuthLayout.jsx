import React from 'react'
import { Link } from 'react-router-dom'


function AuthLayout({title,onSubmit,children,buttonTitle,footLine,Authpage,path}) {
  return (
    <div className='bg-blue-300 h-dvh w-full'>
        <div className='m-auto w-1/2 h-1/2 bg-blue-950 p-5  rounded-lg mt-20 flex items-center justify-center flex-col gap-2'>
        <h1 className='text-white text-2xl'>{title}</h1>
        <form onSubmit={onSubmit} className='flex flex-col gap-2'>
     {children}
      <button type='submit' className='bg-blue-500 w-full p-2 rounded-lg mt-5 text-white'>{buttonTitle}</button>
        </form>

        <p className='text-white'>{footLine}<Link to={path} className='underline hover:text-blue-500'>{Authpage}</Link></p>
        </div>
      
    </div>
  )
}

export default AuthLayout

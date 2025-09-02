import React from 'react'
import AuthLayout from './AuthLayout.jsx'

function Login() {


  return (
    <>
    <AuthLayout title="Login" buttonTitle="Login" footLine="Don't have an account?" Authpage="Sign Up" path='/signup'>
  <input type="email" placeholder='Email' className='p-2 text-white rounded-lg'/>
       <input type="password" placeholder='Password' className='p-2 text-white rounded-lg'/>
       
      

    </AuthLayout>
    </>
  )
}

export default Login

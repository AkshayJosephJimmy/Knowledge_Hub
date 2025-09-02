import React from 'react'
import AuthLayout from './AuthLayout.jsx'

function SignUp() {
  return (
    <>
    <AuthLayout title="Sign Up" buttonTitle="Sign Up" footLine="Already have an account?" Authpage="Login" path='/login'>
  <input type="text" placeholder='Name' className='p-2 text-white rounded-lg'/>
  <input type="email" placeholder='Email' className='p-2 text-white rounded-lg'/>
       <input type="password" placeholder='Password' className='p-2 text-white rounded-lg'/>
       <input type="password" placeholder='Confirm Password' className='p-2 text-white rounded-lg'/>
       
      

    </AuthLayout>
    </>
  )
}

export default SignUp

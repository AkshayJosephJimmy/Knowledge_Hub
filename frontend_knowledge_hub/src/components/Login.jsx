import React from 'react'
import AuthLayout from './AuthLayout.jsx'
import axios from 'axios'

function Login() {
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');

  function handleSubmit(e){
    e.preventDefault();

    axios.post('http://localhost:7500/api/login',{email,password})
    .then((res)=>{
      alert("User logged in successfully")
      console.log(res)
    })
    .catch((err)=>{
       alert("User not found")
      console.log(err)
    })
    
  }


  return (
    <>
    <AuthLayout title="Login" buttonTitle="Login" footLine="Don't have an account?" Authpage="Sign Up" path='/signup' onSubmit={handleSubmit}>
  <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} value={email}className='p-2 text-white rounded-lg'/>
       <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' className='p-2 text-white rounded-lg'/>
       
      

    </AuthLayout>
    </>
  )
}

export default Login

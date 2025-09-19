import React from 'react'
import AuthLayout from './AuthLayout.jsx'
import axios from 'axios'

function SignUp() {
  const [name,setName]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [confirmPassword,setConfirmPassword]=React.useState('');

  function handleSubmit(e){
    
   if(password!==confirmPassword){
    alert("Passwords do not match");
    return;
   }
    e.preventDefault();   
    console.log("form submitted"); 

    axios.post('http://localhost:7500/api/signup',{name,email,password})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  

    
  return (
    <>
    <AuthLayout title="Sign Up" onSubmit={(e)=>handleSubmit(e)} buttonTitle="Sign Up" footLine="Already have an account?" Authpage="Login" path='/login'>
  <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Name' className='p-2 text-white rounded-lg'/>
  <input type="email" placeholder='Email'onChange={(e)=>{setEmail(e.target.value)}} value={email} className='p-2 text-white rounded-lg'/>
       <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Password' className='p-2 text-white rounded-lg'/>
       <input type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword} placeholder='Confirm Password' className='p-2 text-white rounded-lg'/>
       
      

    </AuthLayout>
    </>
  )
}

export default SignUp

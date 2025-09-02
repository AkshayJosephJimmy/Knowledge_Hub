import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/AuthLayout'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Home Page</div>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp />}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App

import React, { useEffect } from 'react'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  

  return (
    <div>
      


      <ToastContainer theme='dark'/>
      <Routes style="position:relative;">
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App

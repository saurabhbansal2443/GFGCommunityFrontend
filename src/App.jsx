import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './Components/Navbar'


const App = () => {
  return (
   <div className='bg-[#F9F7F7]'>
   <Navbar></Navbar>
   <Outlet></Outlet>
  
   </div>
  )
}

export default App

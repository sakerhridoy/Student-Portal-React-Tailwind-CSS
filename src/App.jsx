import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Family from './Components/Family/Family'
import Contact from './Components/Contact/Contact'
import StudentPortal from './Components/StudentPortal/StudentPortal'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Family />
      <Contact />
      <StudentPortal />
      <Footer/>
    </>
  )
}

export default App

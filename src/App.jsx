import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>


      <Navbar/>

      <Routes>



<Route path='/' element={<Home/>} />
<Route path='/about' element={<Aboutus/>} />
<Route path='/services' element={<Services/>} />
<Route path='/projects' element={<Projects/>} />
<Route path='/blogs' element={<Blogs/>} />
<Route path='/contact' element={<Contact/>} />

      </Routes>


      <Footer/>

    </div>
  )
}

export default App
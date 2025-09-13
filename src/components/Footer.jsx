import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='mt-20'>


           <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-blue-900">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                   <h1 className='text-orange-400'>AH Construction</h1>
                    <p className="mt-6 text-sm text-white">
                     AH Construction delivers expert construction and renovation services with a focus on quality, safety, and precision. We manage residential and commercial projects from start to finish, ensuring excellence at every stage. Our experienced team combines innovation with reliable workmanship to bring your vision to life while respecting deadlines and budgets.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-orange-400">Company</h2>
                        <ul className="text-sm space-y-2">

                        <Link to='/'><li className='text-white'>Home</li></Link>    
                         <Link to='/about'><li className='text-white'>Aboutus</li></Link>                          
                          <Link to='/services'><li className='text-white'>Services</li></Link> 
                           <Link to='/contact'><li className='text-white'>Contact</li></Link> 
                           <Link to='/projects'><li className='text-white'>Projects</li></Link>
                           <Link to='/blogs'><li className='text-white'>Blogs</li></Link>                      
                    
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-orange-400">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p className='text-white'>+254 78787878787</p>
                            < p className='text-white'>AHconstructions@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5 text-orange-400 font-bold">
                Copyright 2025  All Right Reserved.
            </p>
        </footer>

    </div>
  )
}

export default Footer
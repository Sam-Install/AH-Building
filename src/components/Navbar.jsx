import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {


    const  [visible, setVisible] = useState(false);


  return (
    <div className='flex items-center justify-between py-5 font-medium '>

      <Link to=''><h1 className='text-sm text-amber-700 mr-3'>AH Contsruction</h1></Link>  

        <ul className='hidden sm:flex gap-5 text-sm text-blue-600'>


            <NavLink to='/' className='flex flex-col items-center gap-1'>

                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />

            </NavLink>


            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>Aboutus</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
            </NavLink>

            <NavLink to='/services' className='flex flex-col items-center gap-1'>
               <p>Services</p>
               <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
            </NavLink>

            <NavLink to='/projects' className='flex flex-col items-center gap-1'>
             <p>Projects</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
            </NavLink>

            <NavLink to='/blogs' className='flex flex-col items-center gap-1'>
                <p>Blogs</p>
                <hr className='w-2/4 h-[1.5px] bg-orange-400 hidden' />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
            </NavLink>

        </ul>

        <div className='flex items-center gap-2'>

         <CgProfile className='w-20' />
        <GiHamburgerMenu onClick={()=>setVisible(true)} className='text-2xl sm:hidden cursor-pointer' />
       

        </div>


        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full' : ' w-0'}`}>


            <div className='flex flex-col text-gray-400'>

                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>

<IoMdClose className='h-4 rotate-180' />
<p>Back</p>


                </div>

                <NavLink to='/' className='py-2 pl-3 border' onClick={()=>setVisible(false)}>Home</NavLink>
                <NavLink to='/about' className='py-2 pl-3 border' onClick={()=>setVisible(false)}>Aboutus</NavLink>
                <NavLink to='/services' className='py-2 pl-3 border' onClick={()=>setVisible(false)}>Services</NavLink>
                <NavLink to='/projects' className='py-2 pl-3 border' onClick={()=>setVisible(false)}>Projects</NavLink>
                <NavLink to='/blogs' className='py-2 pl-3 border' onClick={()=>setVisible(false)}>Blogs</NavLink>
                <NavLink to='/contact' className='py-2 pl-3 border' onClick={()=>setVisible(false)}>Contacts</NavLink>


            </div>

        </div>



    </div>

  )
}

export default Navbar
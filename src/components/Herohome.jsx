import React from 'react'
import co from '../assets/cons.jpg' 
import { Link } from 'react-router-dom'


const Herohome = () => {
  return (
    <div className='mt-2 relative w-full h-[320px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden'>

        <img src={co} alt="" className=' w-full h-full object-cover brightness-50' /> 


        <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4'>

            <h1 className='text-3xl text-orange-500 font-bold mb-2'>Welcome to AH Construction</h1>
            <p className='text-2xl text-white mt-2'>Your one step to all your construction needs</p>

               <div className='mt-6 w-full sm:w-auto flex flex-col sm:flex-row gap-3 '>
                <Link to='/services'><button className='bg-green-400 text-white px-6 py-2 rounded text-s'>See More</button></Link>
              <a 
  href="https://wa.me/254753879163" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className='bg-orange-500 text-white px-6 py-2 rounded text-s'>
    Enquire More
  </button>
</a>
            </div>

        </div>


       



    </div>
  )
}

export default Herohome
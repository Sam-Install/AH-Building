import React from 'react'
import ab from '../assets/about.jpg'

const Abouthome = () => {
  return (
    <div className='mt-10 px-4 sm:px-8 lg:px-16'>

        <div className='flex flex-col sm:flex-row gap-8 text-center items-center'>

            <div className='w-full sm:w-1/2'>

<img src={ab} alt="" className='rounded-2xl w-full object-cover shadow-md '  />

            </div>


            <div className='w-full sm:w-1/2'>

            <h1 className='text-2xl text-orange-500 mt-2'>About us</h1>
            <p className='text-s text-gray-500'>At AH Construction, we make building easy and stress-free. Whether you need a new home, a renovation, or expert advice, we’re here to help. Our friendly team focuses on quality, reliability, and making sure every project turns out just the way you imagined — on time and within budget.</p>

            </div>

        </div>

    </div>
  )
}

export default Abouthome
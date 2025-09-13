import React from 'react'
import c from '../assets/center.jpg'

const Contact = () => {


const handleSubmit = (e) => {

     e.preventDefault();
}

  return (
    <div className='mt-2'>

      <div className='flex flex-col sm:flex-row gap-6'>

        <div className='w-full sm:w-1/2'>

        <img src={c} alt="" className='w-full h-full ' />

        </div>


        <div className='w-full sm:w-1/2  p-6 rounded-2xl shadow-md'>


        <h2 className='text-center'>GET IN TOUCH</h2>

         <form action="" className='flex flex-col gap-4'>


          <div className='flex flex-col'>

            <label htmlFor="" className='mb-1 font-medium'>First Name</label>
            <input type="text" name="" id="" placeholder='Enter first name' className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300' />

          </div>


          
          <div className='flex flex-col'>

            <label htmlFor="" className='mb-1 font-medium'>Second Name</label>
            <input type="text" name="" id="" placeholder='Enter second  name' className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300' />

          </div>


          
          <div className='flex flex-col'>

            <label htmlFor="" className='mb-1 font-medium'>Location</label>
            <input type="text" name="" id="" placeholder='Enter Location' className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300' />

          </div>



          
          <div className='flex flex-col'>

            <label htmlFor="" className='mb-1 font-medium'>Phone Number</label>
            <input type="number" name="" id="" placeholder='Enter Phone Number' className='p-2 rounded-md border focus:outline-none focus:ring focus:ring-orange-300' />

          </div>


          
          <div className='flex flex-col'>

            <label htmlFor="" className='mb-1 font-medium'>Email</label>
            <input type="Email" name="" id="" placeholder='Enter Email' className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300' />

          </div>


          
          <div className='flex flex-col'>

            <label htmlFor="" className='mb-1 font-medium'>Message</label>
            <input type="text" name="" id="" rows="6" placeholder='Enter Message' className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300' />

          </div>


<button type='submit' className='bg-blue-500 px-6 py-2 text-white text-sm rounded'>Submit</button>



           
         </form>


        </div>

      </div>

    </div>
  )
}

export default Contact
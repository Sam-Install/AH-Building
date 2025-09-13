import React from 'react'
import h3 from '../assets/hero2.jpg'
import ab from '../assets/abs.jpg'
import tst from '../assets/test.jpg'
import tst2 from '../assets/test3.jpg'
import rg from '../assets/rig1.jpg'

const Aboutus = () => {


  const testimonials =  [

        {

          img:rg,
          title: "Wamunyoro",
          description: " Enjoyed the services , they built wamunyoro well"

            
        }, 



          {

          img:tst2,
          title: "G-easy",
          description: "Will always recommend these guys anyday anytime"

            
        }, 



          {

          img:tst,
          title: "Pillar",
          description: "Crafted my Home in Ways i cant tell , simply amazing"

            
        }, 



  ]


  return (
    <div className='mt-10'>
      
      <div className='mt-2 relative w-full h-[320px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden'>

       <img src={h3} alt="" className='w-full h-full brightness-50 object-cover' /> 


       <div className='absolute inset-0 text-center items-center px-4 text-white flex flex-col justify-center'>

        <h1 className='text-orange-500 font-bold text-4xl'>About us</h1>
        <p className='text-2xl mb-4'>What we Do, Offer & run by</p>

       </div>

      </div>

      <h1 className='text-center text-2xl text-gray-950 mt-4'>Who We Are</h1>


      <div className='flex flex-col sm:flex-row gap-4'>

        <div className='w-full sm:w-1/2 mt-5'>

<img src={ab} alt="" className='w-full h-full rounded-2xl object-cover' />


        </div> 

        <div className='w-full sm:w-1/2  text-center items-center'>

        <h1 className='text-orange-500 mb-4'>Who We are</h1>
        <p className='text-gray-800'>At AH Construction, we believe building should be simple, stress-free, and inspiring. With years of experience in residential, commercial, and government projects, we combine modern techniques with trusted craftsmanship to deliver results you can count on.

From affordable housing to luxury getaways, our focus is always on quality, transparency, and timely delivery. We work closely with every client to bring their vision to life, keeping projects on schedule and within budget — without ever compromising on standards.

Our mission is to create spaces that last, add value, and truly feel like home. Whether you need a new build, renovation, or professional advice, AH Construction is your reliable partner for every step of the journey.</p>

        </div>

      </div>


      <div className='text-center mt-16'>

<h2 className='text-2xl font-bold mb-2'>Testimonials</h2>
<p className='text-center'>What Our Clients Say About us</p>

      </div>





<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

  {testimonials.map((testimonial, index)=>(

      <div key={index} className='flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 transition mt-5  '>

        <img src={testimonial.img} alt="" className='w-full h-48 object-cover' />

        <div className='text-center mt-2'>
          <h1 className='text-bold text-black'>{testimonial.title}</h1>
          <p className='text-gray-900'>{testimonial.description}</p>
          </div>

        </div>
  ))}

</div>


    </div>
  )
}

export default Aboutus
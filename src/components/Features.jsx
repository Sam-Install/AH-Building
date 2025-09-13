import React from 'react'
import { TbMoneybag } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { GiWorld } from "react-icons/gi";

const Features = () => {

   const  features =  [
 

        {

        icon: <TbMoneybag className='text-4xl text-green-600' />,
        title: "Save Money",
        description: "We make sure that we stick to your budget and provide quality for less"

        },

        {

        icon:<IoMdTime className='text-4xl text-green-600' />,
        title: "We deliver projects on time",
        description: "Our team ensures we deliver your project on time"

        },



{

     icon: <GiWorld className='text-4xl text-green-600' />,
     title: "World class standards followed",
     description: "We follow the best building standards on all our projects"



}



        
           
    ]

  return (
    <div className='mt-10'>

        <h1 className='text-center text-2xl'>What sets us apart</h1>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

{features.map((feature,index)=> (


  <div key={index} className='flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition mt-5'> 


  <div className='mb-4'>{feature.icon}</div>
  <h2 className='text-lg font-semibold text-gray-700'>{feature.title}</h2>
  <p className='text-gray-500 mt-2 text-sm'>{feature.description}</p>


    </div>

))}


        </div>






    </div>
  )
}

export default Features
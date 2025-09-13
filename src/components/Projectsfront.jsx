import React from 'react'
import hs1 from '../assets/house1.jpg'
import hs2 from '../assets/house2.jpg'
import hs3 from '../assets/house3.jpg'
import hs4 from '../assets/house4.jpg'

const Projectsfront = () => {


    const houses = [


        {
             img:hs1,
             title:"Affordable houses",
             description: " We have built affordable  houses for the government"
        },


        { 

             img:hs2,
             title:"Rental flats",
             description: "We have built numerous buildings for rentals across the country"
        },


         {

             img:hs3,
             title: "Clients house",
             description: "We built this beautiful masterpiece for our client in canada"
         },


         {

             img:hs4,
             title: "Rural Getaway",
             description: "We built this home getaway house for an old couple based in malindi"
         }
    ]


  return (
    <div className='mt-10'>

       <h1 className='text-center items-center  text-black text-2xl'>Sneak pic of Some of Our Projects</h1>


       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>

{houses.map((house, index)=>(


<div key={index} className='flex flex-col bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition mt-5 '>
     
 <img src={house.img} alt={house.title} className='w-full h-48 object-cover' />

 <div className='p-4'>
    <h2 className='text-center font-bold mb-4'>{house.title}</h2>
    <p className='text-center'>{house.description}</p>


    </div>


    </div>
      
))}


       </div>

    </div>
  )
}

export default Projectsfront
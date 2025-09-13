import React from 'react'
import pro from '../assets/projectmanagement.jpg'
import int from '../assets/interior.jpg'
import ren from '../assets/renovation.jpg'
import res from '../assets/residential.jpg'
import struc from '../assets/structural.jpg'
import cons from '../assets/consultation.jpg'
import gb from '../assets/greenbuilding.jpg'
import cm from '../assets/commercial.jpg'




const Services = () => {  


  const services = [

      {
          
           img:pro,
           title: "Project Management",
           description: "We provide complete project supervision, from design to completion, ensuring smooth workflow and timely delivery."
      },


       {

            img:int,
            title:"Interior Design",
            description: "Our team offers top-tier painting, flooring, tiling, roofing, and landscaping to give your property the perfect finish."
       },


       {

            img:ren,
            title:"Renovation",
            description: "Transform existing spaces with our renovation and remodeling services — kitchens, bathrooms, and full-home makeovers."
       },


       {
           
            img:res,
            title:"residential",
            description: "From custom homes to modern renovations, we bring your dream house to life with quality materials and expert craftsmanship."
       },



        {
             img:struc,
             title:"Structural Repairs & Maintenance",
             description: "We handle foundation repairs, wall reinforcements, and other critical structural fixes to keep your property safe and strong."
        },



        {

             img:cons,
             title:"Design & Consultation",
             description: "Our experts guide you through planning, budgeting, and designing your projects with practical and creative solutions."
        },


        {

           img:gb,
           title:"Sustainable & Green Building Solutions",
           description: "We implement eco-friendly building practices, energy-efficient systems, and sustainable materials for modern, responsible construction."
        },


        {

            img:cm,
            title:"commercial",
            description: "We handle office buildings, retail spaces, and warehouses, delivering durable and functional commercial spaces on time and within budget."
        }
       
  ]


  return (
    <div className='mt-10'>

      <h1 className='text-center text-2xl text-orange-400'>Our Services</h1>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        {services.map((service, index)=>(

               <div key={index} className='flex flex-col items-center text-center bg-white shadow-2xl rounded-2xl p-6 transition mt-5'>


               <img src={service.img} alt={service.title} />

               <div>

                <h1 className='font-bold  mt-2 text-blue-500'>{service.title}</h1>
                <p className='text-black mb-3'>{service.description}</p>

                </div>
 
                </div>
        ))}



      </div>


    </div>
  )
}

export default Services
import React from 'react'
import pr1 from '../assets/project1.jpg'
import pr2 from '../assets/project2.jpg'
import pr3 from '../assets/project3.jpg'
import pr4 from '../assets/project4.jpg'
import pr5 from '../assets/project5.jpg'
import pr6 from '../assets/project6.jpg'

const Projects = () => {


  const projs = [

        {

            img:pr1,
            title:"Timber xo",
            description: "Well crafted and up to standards timber house"
        },


        {

             img:pr2,
             title: "Affordable houses malindi",
             description: "Modern affordable houses built in kilifi"
        },


        {

            img:pr3,
            title: "Bay harbour",
            description:"Modern megahouse Built for a client based in mtwapa"
        },



        {

            img:pr4,
            title:"Holiday AirBNB",
            description: "Great AirBNB built in mombasa "

        },


          {

            img:pr5,
            title:"Farm House",
            description: "mansion build inside tsavo national park "

        },


            {

            img:pr6,
            title:"Retirement House villa",
            description: "Retirement house villa built for a client in canada "

        }


  ]


  return (
    <div className='mt-2'>

      <h1 className='text-center font-bold text-orange-500 mt-2'>Our Projects</h1>
      <p className='text-center'>Below are Some of the projects we are and have worked on</p> 


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        {
             projs.map((proj, index)=>(

                   <div key={index} className='flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 transition mt-5 '>

                    <img src={proj.img} alt={proj.title} />

                    <div>


                      <h1 className='mt-2 font-bold'>{proj.title}</h1>
                      <p className='mb-2'>{proj.description}</p>


                      </div>

                    </div>
             ))
        }

      </div>

    </div>
  )
}

export default Projects
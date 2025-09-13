import React from 'react'
import Herohome from '../components/Herohome'
import Abouthome from '../components/Abouthome'
import Features from '../components/Features'
import Projectsfront from '../components/Projectsfront'

const Home = () => {
  return (
    <div className='mt-10'>

<Herohome/>
<Abouthome/>
<Features/>
<Projectsfront/>

    </div>
  )
}

export default Home
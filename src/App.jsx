import React from 'react'
import Navbar from './navbar'
import Image from './image'
import Program from './programs'
import Title from './title'
import About from './about'
import Reviews from './reviews'
import Contact from './contact'
import Footer from './footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Image/>
      <Title titles="Degree provided" sTitle="Program"/>
      <Program/>
      <Title titles="Glance"/>
      <About/>
      <Title titles="What our student says" sTitle="Reviews"/>
      <Reviews/>
      <Title titles="Contact us" sTitle="Any Queries"/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App

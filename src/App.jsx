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
      <Title title="Programs Available" subTitle="Program"/>
      <Program/>
      <Title titles="Glance"/>
      <About/>
      <Title title="Our Students" subTitle="Reviews"/>
      <Reviews/>
      <Title title="Contact us" subTitle="Any Queries"/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App

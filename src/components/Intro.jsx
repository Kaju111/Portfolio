import React, { useState } from 'react'
import {motion} from "framer-motion"
import About from './About'
import Portfolio from './Portfolio'
import Footer from './Footer'
import {FaRegHandPointRight} from "react-icons/fa"


const linkOptions = {
  initial:{
    scale:0.1,
    opacity: 0
  },
  whileInView:{
    scale: 1,
    opacity: 1
  },
  Transition:{
    delay: 1,
  }}  

const Intro = () => {
  return (
    <div>
      <a href="/blog">
        <button className=' gap-5 border-2 px-7 py-3 rounded-full font-primary font-bold border-amber-600 flex items-center mt-[100px] hover:bg-amber-600 hover:text-white text-amber-600 duration-500'>
         <h1>My Blog site </h1> 
         <h1><FaRegHandPointRight/></h1>
        </button>
        </a>
          <motion.ul {...linkOptions}>

        <div className='text-white h-screen mt-[180px] flex flex-col'>
          <span className='font-section sm:leading-[80px] md:leading-[140px] leading-[80px] sm:text-[30px] md:text-[40px] text-[30px]'>Hi, my name is...</span>
          <span className='font-name sm:text-[140px] md:text-[200px] text-[80px]'>
            <h1 className='md:leading-[150px] leading-[60px] sm:leading-[110px]'>KAJU</h1>
            <h1 className='md:leading-[150px] leading-[60px] sm:leading-[110px]'>SAIKIA</h1>
            </span>
        </div>

          </motion.ul>

      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default Intro



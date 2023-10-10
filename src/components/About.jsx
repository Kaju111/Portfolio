import React from 'react'
import { motion } from "framer-motion"

const linkOptions = {
  initial:{
    y:"100%",
    opacity: 1
  },
  whileInView:{
    y:0,
    opacity: 1
  },
  Transition:{
    delay: 1,
  }} 



const About = () => {
  return (
    <div>
      
      <motion.ul {...linkOptions}>

      <div className='text-white h-[500px] mt-[130px] flex flex-col' id='about'>
        <span className='font-primary text-[30px] sm:text-[30px] md:text-[45px] font-bold'>01: About Me</span>

        <span className='font-primary text-[15px] sm:text-[17px] md:text-[20px] mt-[40px] mb-[30px] sm:leading-[21px] leading-[17px] md:leading-[25px]'>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
</span>
        <span className='font-primary text-[15px] sm:text-[17px] md:text-[20px] sm:leading-[17px] leading-[20px] md:leading-[25px]'>I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.

</span>
      </div>

    </motion.ul>

    </div>
  )
}

export default About

import React from 'react'
import {FaLinkedinIn} from "react-icons/fa"
import {SiMinutemailer} from "react-icons/si"
import {FaGithub} from "react-icons/fa"
import {FaRegHandPointRight} from "react-icons/fa"

const Footer = () => {
  return (
    <div id='contact'>
      <div className='h-full flex flex-col mt-[100px] items-center justify-center text-white'>
        <h1 className='font-primary sm:text-[35px] text-[35px] md:text-[45px] font-bold'>Get in Touch!</h1>
        <h1 className='font-primary sm:text-[15px] text-[15px] md:text-[20px] w-[70%]  my-11 text-center'>My inbox is always open. Whether for a potential project or just to say hi, feel free to reach out to me!</h1>
        <a href="mailto:saikiakaju275@gmail.com">
        <button className='font-primary text-[20px] border-2 text-amber-600 hover:bg-[#2F201C] hover:text py-4 px-8 font-semibold '>Say Hello</button>
        </a>

      </div>

      <span className='text-amber-600 text-[15px] sm:txet-[15px] md:text-[20px] gap-6 font-primary md:flex md:justify-between pb-16 sm:pb-5 mt-14'>
        <h1>saikiakaju275@gmail.com</h1>
        <h1 className='flex gap-6 py-2 md:py-0 sm:py-2'>
        <a href="https://www.linkedin.com/in/kaju-saikia-568354289/"><FaLinkedinIn/></a>
                            <a href="mailto:saikiakaju275@gmail.com"><SiMinutemailer/> </a>
                            <a href="https://github.com/Kaju111"><FaGithub/></a>
        </h1>
        <h1>©2023 Copyright by Kaju Saikia</h1>
      </span>

    </div>
  )
}

export default Footer

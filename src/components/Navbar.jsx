import React, { useState } from 'react'
import {SiHomeadvisor} from "react-icons/si"
import {ImMenu} from "react-icons/im"
import {ImCross} from "react-icons/im"
import { Link} from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
import {motion} from "framer-motion"
import {FaLinkedinIn} from "react-icons/fa"
import {SiMinutemailer} from "react-icons/si"
import {FaGithub} from "react-icons/fa"

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
      delay: 2,
    }}  

const Navbar = () => {

    const [nav, setNav] = useState(false)

  return (
    <>
     <div className='flex justify-between mt-6 '>

        <a href={'/'} className='text-white z-10 '><SiHomeadvisor className='w-[80px] h-[80px]'/></a>    
        <span onClick={()=>setNav(!nav)} className='text-white z-10'>
            {nav ? 
            <ImCross className='w-[60px] h-[60px]'/>
            : 
            <ImMenu className='w-[60px] h-[60px]'/> 
            }
            </span>   

            {nav && (
            <div className='flex flex-col justify-center fixed top-0 left-0 w-full h-screen bg-[#6C3428] text-black'>

                    <motion.ul {...linkOptions}>


                    <div className='grid grid-cols-3'>


                    <span className='text-white font-name text-[50px] h-[100px] flex flex-col w-[25%] m-auto ' onClick={() => setNav(!nav)}>
                        <Link className='hover:ml-[40px] hover:rounded-md duration-300' to={'/'}>Intro</Link>
                        <HashLink className='hover:ml-[40px] hover:rounded-md duration-300' to={"/#about"}>About</HashLink>
                        <HashLink className='hover:ml-[40px] hover:rounded-md duration-300' to={"/#portfolio"}>Portfolio</HashLink>
                        <HashLink className='hover:ml-[40px] hover:rounded-md duration-300' to={"/#contact"}>Contact</HashLink>
                    </span>

                    <span></span>
                    <span></span>

                    </div>
                    </motion.ul>


                    <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-3 inset-x-0 bottom-6 absolute w-[80%] font-primary font-bold text-white sm:txet-[23px] md:text-[20px] gap-10 m-auto'>
                        <span className=''>saikiakaju275@gmail.com</span>
                        <span className='flex flex-row gap-4 justify-center'>
                            <a href="https://www.linkedin.com/in/kaju-saikia-568354289/"><FaLinkedinIn/></a>
                            <a href="mailto:saikiakaju275@gmail.com"><SiMinutemailer/> </a>
                            <a href="https://github.com/Kaju111"><FaGithub/></a>
                        </span>
                        <span className='flex justify-center'>©2023 Copyright by Kaju Saikia</span>
                    </div>

                    
                </div>
            )}
            </div> 

    </>
  )
}

export default Navbar




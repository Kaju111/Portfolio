import React from 'react'
import shoppy from './images/shoppy.jpeg'
import shose from './images/shose.jpeg'

const Portfolio = () => {
  return (
    <div id='portfolio' className='text-white h-auto'>
      
 <div>

<span className='font-primary text-[30px] sm:text-[30px] md:text-[45px] font-bold'>02: Some Things I've build</span>

  <div className='grid md:grid-cols-2 '>

        <div className='h-[400px] w-[550px] rounded-xl border-2 border-white'>
          <span>
            <img src={shoppy} className='h-[300px] w-[400px]'/>
          </span>

        </div>

      <div className='h-[400px] w-[550px] rounded-xl border-2 border-white'>

      </div>

  </div>

</div> 

    </div>
  )
}

export default Portfolio

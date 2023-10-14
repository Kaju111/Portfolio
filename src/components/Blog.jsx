import React from 'react'

const Blog = () => {
  return (
    <>
     <div className='text-white'>
        <span className='grid lg:grid-cols-2 gap-6 lg:gap-28 mt-[100px]'>
            <a href="/mongo">
            <h1 className='border rounded-xl font-name text-2xl flex justify-center py-7 hover:bg-amber-900 hover:border-amber-900 duration-500 hover:scale-105'>How to connect reactjs with mongodb</h1>
            </a>
            <a href="/newapp">
            <h1 className='border rounded-xl flex font-name text-2xl justify-center py-7 hover:bg-amber-900 hover:border-amber-900 duration-500 hover:scale-105'>How to create react app</h1>
            </a>
        </span>
    </div> 
    </>
  )
}

export default Blog

import React from 'react'
import {FaRegHandPointLeft} from "react-icons/fa"
import DB from "../components/images/DB.png"

const Mongo = () => {
 

  return (
    <>
      <div className='text-white h-full'>
        <a href='/blog' className='text-amber-600'>
          <FaRegHandPointLeft className='h-[50px] mb-9 mt-[50px] w-[100px] hover:scale-125 duration-500'/>
        </a>

        <div className='flex flex-col gap-10 items-center justify-center'>
      <span>
        <img src={DB} className='h-[300px] w-[500px]'/>
      </span>
      <h1 className='font-primary text-lg text-center'>I’d be happy to walk you through the process of connecting MongoDB with a React.js application step by step. In this example, we’ll assume you have a basic understanding of React.js and MongoDB. If not, you might want to familiarize yourself with those technologies first.</h1>

      <h1 className='font-primary text-2xl font-bold'>Step 1: Set Up Your MongoDB Database</h1>

        <h1 className='font-primary text-lg text-center'>1. Install MongoDB: Download and install MongoDB from the official website
        <a href='https://www.mongodb.com/try/download/community' className='hover:text-amber-500 duration-500'>(Click)</a>. Follow the installation instructions for your operating system.</h1>

        <h1 className='font-primary text-lg text-center'>2. Start MongoDB: Start the MongoDB server. This usually involves running a command like mongod in your terminal.</h1>

        <h1 className='font-primary text-lg text-center'>3. Create a Database: Use a MongoDB management tool like MongoDB Compass or the command line to create a new database. For example, using the command line:</h1>

        <h1 className='border font-serif py-4 px-5 border-[#2E2E2E] h-[85px] rounded-lg bg-[#171717] w-full'>mongo <br/>
         use your_database_name</h1>

        <h1 className='font-primary text-lg text-center'>4.  Create a Collection: Inside your database, create a collection to store your data. For instance:</h1>

        <h1 className='border font-serif py-7 px-5 border-[#2E2E2E] h-[80px] rounded-lg bg-[#171717] w-full'>db.createCollection("items")</h1>

        <h1 className='font-primary text-2xl font-bold'>Step 2: Set Up Your React.js Application</h1>

        <h1 className='font-primary text-lg text-center'>1. Create a React App: If you haven’t already, create a new React.js application using create-react-app or your preferred method.</h1>
        <h1 className='font-primary text-lg text-center'>2. Install Dependencies: Inside your React.js project folder, open a terminal and install the necessary packages:
</h1>
    
<h1 className='flex justify-between border font-serif py-7 px-5 border-[#2E2E2E] h-[80px] rounded-lg bg-[#171717] w-full'>npm install axios mongoose
  </h1>

        <h1 className='font-primary text-lg text-center'>axios is a popular library for making HTTP requests.</h1>
        <h1 className='font-primary text-lg text-center'> is an Object Data Modeling (ODM) library for MongoDB and Node.js.</h1>

        <h1 className='font-primary text-2xl font-bold'>Step 3: Create a Connection to MongoDB</h1>

          <h1 className='font-primary text-lg text-center'>1. Create a Server-Side Component: In your React project, set up a server-side component to handle communication with MongoDB. You can create a file named server.js in your project root.</h1>
          <h1 className='font-primary text-lg text-center'>2. Install Express: Inside server.js, install and set up Express, a Node.js framework for building web applications:</h1>

          <h1 className=' border font-serif py-7 px-5 border-[#2E2E2E] h-full -scroll-ml-11 rounded-lg bg-[#171717] w-full'> <h2>const express = require("express");</h2>
          <h2>const app = express();</h2>
          <h2>const PORT = process.env.PORT || 5000;</h2>
  </h1>


          <h1 className='font-primary text-lg text-center'></h1>
          <h1 className='font-primary text-lg text-center'></h1>
          <h1 className='font-primary text-lg text-center'></h1>
          <h1 className='font-primary text-lg text-center'></h1>
          <h1 className='font-primary text-lg text-center'></h1>


      </div>

      </div>
    </>
  )
}

export default Mongo

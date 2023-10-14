import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Intro from "./components/Intro"
import Blog from './components/Blog'
import Mongo from './blog/Mongo'
import NewApp from './blog/NewApp'

const App = () => {
  return (
    <div>

      <Navbar/>
<Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/mongo' element={<Mongo/>}/>
          <Route path='/newapp' element={<NewApp/>}/>
       </Routes>

    </div>
  )
}


export default App




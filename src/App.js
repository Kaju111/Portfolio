import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Intro from "./components/Intro"

const App = () => {
  return (
    <div>

      <Navbar/>
<Routes>
          <Route path='/' element={<Intro/>}/>
          
       </Routes>

    </div>
  )
}


export default App




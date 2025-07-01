import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'

function App() {


  return (
    <div className="p-1 m-0 box-border md:p-3 md:box-border">
      <Navbar />
      <Banner/>
    </div>
  )
}

export default App

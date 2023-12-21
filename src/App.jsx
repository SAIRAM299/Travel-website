import React from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Popular from './component/Popular/Popular'
import Offer from './component/Offer/Offer'
import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Popular/>
      {/* <Offer/>
      <About/>
      <Blog/>
      <Footer/> */}
    </div>
  )
}

export default App

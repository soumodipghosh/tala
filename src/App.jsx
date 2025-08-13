import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Album from './components/Album'
import Service from './components/Service'
import Stories from './components/Stories'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Album/>
      <Stories/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

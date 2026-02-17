import {useRef} from 'react'
import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Guide from './Components/Guide'
import About from './Components/About'
import Recommender from './Components/Recommender'
import Footer from './Components/Footer'

function App() {

  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <Guide/>
      <Recommender/>
      <Footer/>
    </div>
  )
}

export default App

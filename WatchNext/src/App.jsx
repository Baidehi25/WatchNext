import { useRef } from 'react'
import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Guide from './Components/Guide'
import About from './Components/About'
import Recommender from './Components/Recommender'
import Footer from './Components/Footer'

function App() {

  const aboutRef = useRef(null)
  const homeRef = useRef(null)
  const tryRef = useRef(null)

  const scrollToSection = (sectionref) => {
    if (sectionref.current) {
      const offset = 120; // adjust this number to your liking
      const top = sectionref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar scrolltotry={() => scrollToSection(tryRef)} scrolltohome={() => scrollToSection(homeRef)} scrolltoabout={() => scrollToSection(aboutRef)} />
      <HeroSection ref={homeRef} scrolltotry={() => scrollToSection(tryRef)} />
      <About ref={aboutRef} />
      <Guide />
      <Recommender ref={tryRef} />
      <Footer />
    </div>
  )
}

export default App

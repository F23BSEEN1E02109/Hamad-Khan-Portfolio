import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Resume from './Components/Resume'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 120,
    })
  }, [])

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
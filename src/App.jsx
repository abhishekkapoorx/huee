import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'
import React from 'react'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import ReadyToStart from './components/ReadyToStart'

const App = () => {

  gsap.registerPlugin(ScrollSmoother);
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      smoothTouch: true,
      effects: true,


    })
  }, []);

  return (

    <main className='w-full min-h-screen text-white bg-zinc-900' id='smooth-wrapper'>
      <Navbar />
      <div id="smooth-content">
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <FeaturedProjects />
        <ReadyToStart />
      </div>


    </main>
  )
}

export default App
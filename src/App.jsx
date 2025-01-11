import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
import LocomotiveScroll from 'locomotive-scroll';
import './assets/locomotive-scroll.css';
import ReadyToStart from './components/ReadyToStart'

const App = () => {
  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('[data-scroll-container]'),
    //   smooth: true,
    // });

    // return () => scroll.destroy();
  }, []);

  return (

    <main data-scroll-container className='w-full min-h-screen text-white bg-zinc-900 '>
      <Navbar/>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedProjects/>
      <ReadyToStart />

    </main>
  )
}

export default App
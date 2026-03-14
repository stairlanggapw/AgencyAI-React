import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Service";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast';

const App = () => {

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  useEffect(() => {
    const moveCursor = (e) => {
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
        outlineRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="dark:bg-black relative">
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>

      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"/>
      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"/>
    </div>
  )
}

export default App
import React from 'react';
import Navbar from './Components/Navigation'
import Intro from './Components/Intro'
import AboutUs from './Pages/About'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Footer from './Components/Footer'
import Projects from './Pages/Projects'

export default function Dashboard() {
  
    return (
      <>
      <Navbar/>
      <Intro/>
      <AboutUs/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>
    );
  }
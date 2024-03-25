import React from 'react';
import Navbar from './Components/Navigation'
import Intro from './Components/Intro'
import AboutUs from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

export default function Dashboard() {
  
    return (
      <>
      <Navbar/>
      <Intro/>
      <AboutUs/>
      <Contact/>
      <Footer/>
      </>
    );
  }
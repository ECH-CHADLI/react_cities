import React from 'react'
import Navbar from '../components/NavbarLanding';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Views from '../components/Views';
import Footer from '../components/Footer-may';

const LandingPage = () => {
  
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destinations/>
      <Views />
      <Footer />
    </div>  
  );

}

export default LandingPage
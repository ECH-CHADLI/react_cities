import React from 'react'
import Logout from '../components/Logout';
import HeroSection from '../components/HeroSection';
import CitiesSection from '../components/CitiesSection';
import TopDestinations from '../components/TopDestinations';
//import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-may';

const HomePage = () => {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <CitiesSection />
      <TopDestinations />
      <Footer />
    </div>
  );
}

export default HomePage
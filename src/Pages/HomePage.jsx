import React, { useContext } from 'react'
import AuthContext from '../Context/authContext'
import Logout from '../components/Logout';
import HeroSection from '../components/HeroSection';
import CitiesSection from '../components/CitiesSection';
import TopDestinations from '../components/TopDestinations';
import Header from '../components/Header';

const HomePage = () => {

  return (
    <div className="mb-32">
      <Header/>
      <HeroSection />
      <CitiesSection />
      <TopDestinations />
    </div>
  );
}

export default HomePage
import React, { useContext } from 'react'
import AuthContext from '../Context/authContext'
import Logout from '../components/Logout';
import HeroSection from '../components/HeroSection';
import CitiesSection from '../components/CitiesSection';

const HomePage = () => {

  return (
    <div className="mb-32">
      <HeroSection />
      <CitiesSection />
    </div>
  );
}

export default HomePage
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import skyVid from '../assets/skyVid.mp4';
import Button from './Button';
import Button2 from './Button2';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={skyVid}
        autoPlay
        loop
        muted
      />
      <div className='flex justify-between items-center h-full text-white'>
        {/* Text in the top right corner */}
        <div className='absolute top-40 right-10 p-4 bg-gray-400 bg-opacity-50 rounded-md max-w-[670px] '>
          <h2>DESCRIPTION:</h2>
          <h1 className='text-xl font-sans text-white-700'>
            "Embark on a journey of discovery with our travel website! Explore
            breathtaking destinations, curated itineraries, and exclusive travel
            experiences. Whether you seek tropical paradises, cultural wonders,
            or adrenaline-packed adventures, our platform is your gateway to a
            world of unforgettable moments. "
          </h1>
          
        </div>
        {/* Buttons section */}
        <div className='absolute top-96 right-36 mx-auto p-1 rounded-md text-black bg-transparent '>
          <Button>LOG IN</Button>
          <Button2>SIGN IN</Button2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState } from 'react';
import LOGO4 from '../assets/LOGO4.png';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className='flex w-full justify-between items-center h-20 absolute z-10 text-white px-8'>
      <div className='flex items-center'>
        <img src={LOGO4} autoPlay muted loop className='w-10 h-10 mr-2' />
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block text-xl font-bold'}>
          TRAVEL2DISCOVER.
        </h1>
      </div>

      <ul className='hidden md:flex ml-4'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}
      >
        <ul>
          <h1 className='text-xl font-bold'>TRAVEL2DISCOVER.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>About</li>
          <li className='border-b'>Services</li>
          <li className='border-b'>Contact</li>

          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

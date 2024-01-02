import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState()
  const handleMenuClick = () =>{
    setMenuClicked(menuClicked => !menuClicked)
  }
  return (
    <div className='mb-8 sm:mb-0'>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-8xl px-3 sm:px-4 lg:px-8">
          <div class="relative flex h-16 items-center justify-between  px-1">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
              onClick={handleMenuClick}>
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
              <div className='trippy text-white font-extrabold text-xl mx-auto text-center  '>TRIPPY</div>
              </div>
              <div class="hidden sm:ml-8 sm:block">
              <div className="flex space-x-4">
                <Link to="/" activeClassName="bg-gray-900 text-white" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" exact>
                  Home
                </Link>
                <Link to="/about" activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  About us
                </Link>
                <Link to="/product" activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Product
                </Link>
              </div>
                {/* <div class="flex space-x-4">
                  <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About us</a>
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Product</a>
                </div> */}
              </div>
              
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <SearchBar />
              <div class="relative ml-3">
              
                <div>
                  {/* <button type="button" class="relative flex rounded-xl bg-blue-800 text-sm p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">user</span>
                    <span class="text-white font-bold ">Sign Up</span>
                  </button> */}
                  <Link
                    to="/authentification"
                    className="relative flex rounded-xl bg-blue-800 text-sm p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">user</span>
                    <Logout />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class={`sm:hidden ${menuClicked ? 'block' : 'hidden'}`} id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            
            <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About us</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Product</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
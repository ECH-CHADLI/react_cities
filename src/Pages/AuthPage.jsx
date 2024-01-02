import React from 'react'
import SignUpForm from './signUp'
import Login from './Login'
import { useState } from 'react'

const AuthPage = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(true);

  const toggleComponent = () => {
    setIsSignUpVisible(!isSignUpVisible);
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
     
  <div className="bg-gray-100 w-[80%] h-[600px] lg:w-[60%] rounded-lg shadow-md flex">
    <div className='w-1/2 h-full ' >
      <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" alt="pic"
      className='w-full h-full object-cover'/>
    </div>
    
    <div className='w-1/2 p-8 h-full'>
    <div className='trippy text-black font-extrabold text-xl pb-8 mx-auto text-center  '>TRIPPY</div>
      {isSignUpVisible ? <SignUpForm /> : <Login />}
      <div className="">
        <div
          onClick={toggleComponent}
          className="text-black font-medium rounded-lg text-sm text-end py-2.5
          hover:text-blue-500 focus:text-blue-500 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
        >
          {isSignUpVisible ? 'Switch to Login' : 'Switch to SignUp'}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default AuthPage
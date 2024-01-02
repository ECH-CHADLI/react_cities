import React from 'react'

export default function Button2(props) {
  return (
    <button className='bg-gray-800 text-white font-[Poppins] py-1 px-6 rounded md:ml-8 hover:bg-indigo-100 hover:text-gray-800 duration-500'>
    {props.children}
</button>
  )
}

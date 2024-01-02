import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-gray-800 text-white font-[Poppins] py-1 px-6 rounded md:ml-auto hover:bg-indigo-100 hover:text-gray-800 duration-500'>
            {props.children}
        </button>
    )
}

export default Button;
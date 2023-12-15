import React from 'react'

export default function InfoFooter({ titles, icons }) {
  return (
    <div className="flex justify-center items-start flex-wrap w-screen xl:space-x-56 lg:space-x-40 md:space-x-20 sm:max-md:grid sm:grid-cols-2 sm:gap-2">
        {titles.map((title, index) => (
            <div className='text-lg'>
                <h1 className="text-base sm:text-lg lg:text-xl text-white capitalize mb-5 font-semibold relative">
                    {title.h1}
                    <span className="block absolute left-0 bottom--3 bg-pink-500 w-12 h-0.5 mt-0.5"></span>
                </h1>
                <p className="ease-in-out duration-300 text-gray-300 hover:text-white">{title.text1}</p>
                <p className="ease-in-out duration-300 text-gray-300 hover:pl-1.5 hover:text-white">{title.text2}</p>
                <p className="ease-in-out duration-300 text-gray-300 hover:pl-1.5 hover:text-white">{title.text3}</p>
                {index === 1 && <p className="ease-in-out duration-300 text-gray-300 hover:pl-1.5 hover:text-white">{title.text4}</p>}
            </div>
        ))}

        <div className='flex flex-col w-56 md:justify-center md:space-x-0'>
            <h1 className="text-base sm:text-lg lg:text-xl text-white capitalize mb-5 font-semibold relative">
              {icons.h1}
              <span className="block absolute left-0 bottom--3 bg-pink-500 w-12 h-0.5 mt-0.5"></span>
            </h1>
            <div className="flex justify-start space-x-10">
              <img className="w-7 h-7 transition-colors duration-300 ease-linear delay-100 rounded-full bg-red-300 hover:bg-red-800 color-white" src={icons.facebook} alt='facebook' />
              <img className="w-7 h-7 transition-colors duration-300 ease-linear delay-100 rounded-full bg-gray-200 hover:bg-gray-300" src={icons.instagram} alt='instagram' />
              <img className="w-7 h-7 transition-colors duration-300 ease-linear delay-100 rounded-full bg-gray-200 hover:bg-gray-300" src={icons.linkedin} alt='linkedin' />
            </div>
        </div>
    </div>
  );
}

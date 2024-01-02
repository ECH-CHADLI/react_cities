import React from 'react'
import InfoFooter from './InfoFooter';

const Footer = () => {
    const infoFooter = [
        {
            h1: "Company",
            text1: "About us",
            text2: "here",
            text3: "flick"
        },
        {
            h1: "Online",
            text1: "About us",
            text2: "here",
            text3: "flick" ,
            text4:"clip"
        },
        {
            h1: "Blocks",
            text1: "About us",
            text2: "here",
            text3: "flick"
        }
    ]
    const icons = { h1: "Socials", facebook: "https://img.icons8.com/?size=50&id=106163&format=png", instagram: "https://img.icons8.com/?size=30&id=59813&format=png", linkedin: "https://img.icons8.com/?size=30&id=98960&format=png"}
    return (
      <footer className="bg-gray-800 text-white p-4 flex mt-10">
        <div className="flex flex-col justify-start items-start w-full overflow-hidden">
            <InfoFooter titles={infoFooter} icons={icons} />
            <div className='flex justify-center w-full'>
                <span className="bg-pink-100 h-[1px] w-[300px] mt-5 mb-2.5"></span>
            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm sm:text-base lg:text-lg">
                    &copy; 2024 Your Destination Explorer
                </p>
            </div>
        </div>
      </footer>
    );
};
  
export default Footer;
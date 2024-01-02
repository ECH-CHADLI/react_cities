import React from 'react';
import screen from '../assets/screen.png';

const Views = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly bg-gray-400 bg-opacity-70 p-6 rounded-md'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-4 text-black'>View Views</h2>
          <p className='text-black-200'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            ipsum eius, aspernatur saepe voluptates placeat tenetur, temporibus
            officiis fuga accusamus molestias, quos fugit! Ad quae corporis
            delectus atque quasi nostrum!
          </p>
        </div>
      </div>
      <div className='lg:col-span-1 flex flex-col items-center justify-center shadow'>
        <img src={screen} alt='Screen' className='w-full h-auto rounded' />
      </div>
    </div>
  );
};

export default Views;

import React from 'react';
const Destinations = () => {
  const destinations = [
    { url: "https://th.bing.com/th/id/R.8e01ce1cca8cc4069f12d749580d36de?rik=MFEtl0%2bO%2ba6Wyg&pid=ImgRaw&r=0", subtitle: "Ifrane" },
    { url: "https://th.bing.com/th/id/OIP._7Is-l0Lytw6F8IeBaQn2gHaEo?rs=1&pid=ImgDetMain", subtitle: "Key West" },
    { url: "https://th.bing.com/th/id/OIP.AzgwSgGCQ9yqQQSkUvEjDgHaFj?w=800&h=600&rs=1&pid=ImgDetMain", subtitle: "Rabat" },
    { url: "https://smartstudent.africa/wp-content/uploads/2021/09/Tanger.jpg", subtitle: "Tanger" },
    { url: "https://th.bing.com/th/id/OIP.HrP8napwh-PSmbXpHuXoWQHaDt?w=2000&h=1000&rs=1&pid=ImgDetMain", subtitle: "Unknown" }
  ];

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1 className='text-4xl font-bold mb-4'>TOP 5 DESTINATIONS</h1>
      <p className='text-gray-600 mb-8'>Discover our top 5 travel destinations</p>
      <div className='grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4'>
        {destinations.map((destination, index) => (
          <div key={index} className='relative'>
            <img
              className={`w-full h-full object-cover ${index === 0 ? 'md:col-span-2 md:row-span-3' : ''}`}
              src={destination.url}
              alt={`Destination ${index + 1}`}
            />
            <div className='absolute bottom-0 right-0 p-4 bg-gray-400 bg-opacity-75 text-white text-right'>
              {destination.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

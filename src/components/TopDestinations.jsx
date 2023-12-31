const TopDestinations = () => {
    const handleDiscoverBtnClick = (cityName) => {
        window.location.href = `/cities/${cityName}`;
    }
    return (
      <div className="top-destinations">
        <p className="text-center font-bold text-2xl mb-10">
          Here are the 4 most visited cities this year
        </p>
        <div className="cities-container w-[90%] mx-auto h-fit flex justify-center items-center flex-col gap-10">
          <div className="flex flex-1 gap-10 w-full">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Topdestinations[0].img_url})`,
                backgroundSize: "cover",
              }}
              className="city h-64 w-1/2 text-white flex flex-col p-5 relative rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            >
              <h2 className="text-2xl font-bold mb-7">
                {Topdestinations[0].name}
              </h2>
              <p className="text-white font-semibold">
                {Topdestinations[0].description}
              </p>
              <button onClick={() => handleDiscoverBtnClick(Topdestinations[0].name)} className="absolute bg-white text-[#333] p-2 m-3 rounded-md bottom-0 right-0 hover:scale-105 hover:bg-[#333] hover:text-white ease-in-out duration-300 ">
                Discover
              </button>
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Topdestinations[1].img_url})`,
                backgroundSize: "cover",
              }}
              className="city h-64 w-1/2 text-white flex flex-col p-5 relative rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            >
              <h2 className="text-2xl font-bold mb-7">
                {Topdestinations[1].name}
              </h2>
              <p className="text-white font-semibold">
                {Topdestinations[1].description}
              </p>
              <button onClick={() => handleDiscoverBtnClick(Topdestinations[1].name) }className="absolute bg-white text-[#333] p-2 m-3 rounded-md bottom-0 right-0 hover:scale-105 hover:bg-[#333] hover:text-white ease-in-out duration-300 ">
                Discover
              </button>
            </div>
          </div>
          <div className="flex flex-1 gap-10 w-full">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Topdestinations[2].img_url})`,
                backgroundSize: "cover",
              }}
              className="city h-64 w-1/2 text-white flex flex-col p-5 relative rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            >
              <h2 className="text-2xl font-bold mb-7">
                {Topdestinations[2].name}
              </h2>
              <p className="text-white font-semibold">
                {Topdestinations[2].description}
              </p>
              <button onClick={() => handleDiscoverBtnClick(Topdestinations[2].name)} className="absolute bg-white text-[#333] p-2 m-3 rounded-md bottom-0 right-0 hover:scale-105 hover:bg-[#333] hover:text-white ease-in-out duration-300 ">
                Discover
              </button>
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Topdestinations[3].img_url})`,
                backgroundSize: "cover",
              }}
              className="city h-64 w-1/2 text-white flex flex-col p-5 relative rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            >
              <h2 className="text-2xl font-bold mb-7">
                {Topdestinations[3].name}
              </h2>
              <p className="text-white font-semibold">
                {Topdestinations[3].description}
              </p>
              <button onClick={() => handleDiscoverBtnClick(Topdestinations[3].name)} className="absolute bg-white text-[#333] p-2 m-3 rounded-md bottom-0 right-0 hover:scale-105 hover:bg-[#333] hover:text-white ease-in-out duration-300 ">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Topdestinations = [
    {
      name: "Fes",
      img_url:
        "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Bangkok, Thailand's capital, is a vibrant mix of modern skyscrapers, ancient temples, and lively street markets. The Chao Phraya River flows through the heart of the city, adding to its dynamic energy. Bangkok's unique fusion of tradition and contemporary life makes it a captivating destination.",
    },
    {
      name: "Paris",
      img_url:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
      description:
        "Paris, the capital of France, is renowned for its romantic ambiance, iconic landmarks such as the Eiffel Tower, and world-class art museums like the Louvre. The charming streets and rich history make Paris a must-visit destination.",
    },
    {
      name: "London",
      img_url:
        "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExvbmRvbnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "London, the capital of the United Kingdom, is a city that seamlessly blends history with modernity. From the iconic Big Ben to the trendy neighborhoods, London offers a diverse range of experiences for visitors.",
    },
    {
      name: "Dubai",
      img_url:
        "https://images.unsplash.com/photo-1523816572-a1a23d1a67b8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Dubai, a city in the United Arab Emirates, is known for its futuristic architecture, luxury shopping, and vibrant nightlife. From the towering Burj Khalifa to the artificial Palm Jumeirah, Dubai is a symbol of opulence and innovation.",
    },
  ];
  
  export default TopDestinations;
import { useParams } from "react-router-dom";
import { cities } from "../data/city";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-may";

const CountryPage = () => {
  const countryName = useParams();
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    // Function to fetch city data from the JSON file
    const fetchCities = async () => {
      try {
        const matchedCities = cities.filter(
          (city) => city.country === countryName.country_name
        );
        console.log(countryName);
        console.log("matched: ", matchedCities);

        if (matchedCities) {
          setCitiesData(matchedCities);
        } else {
          console.error("hhhhhhhhhhhh");
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    // Call the fetchCities function
    fetchCities();
  }, [countryName]);
  const handleClick = (cityName) => {
    window.location.href = `/cities/${cityName}`;
  }

  return ( <>
    <Navbar />
    <div className="grid grid-cols-4 gap-5 mx-10 my-5 mt-20 mb-20">
      {citiesData.map((city) => (
        <div
          key={city.name}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${city.destinations[0].image})`,
            backgroundSize: "cover",
          }}
          className="city h-64 w-4/8 text-white flex flex-col p-5 relative rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <h2 className="text-2xl font-bold mb-7">{city.name}</h2>
          <p className="text-white font-semibold">
            {city.destinations[0].description}
          </p>
          <button className="absolute bg-white text-[#333] p-2 m-3 rounded-md bottom-0 right-0 hover:scale-105 hover:bg-[#333] hover:text-white ease-in-out duration-300 "
            onClick={() => handleClick(city.name)}>
            Discover
          </button>
        </div>
      ))}
    </div> 
    <Footer /> </>
  );
};

export default CountryPage;

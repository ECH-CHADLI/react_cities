import City from "../sections/City";
import BestPlaces from "../sections/BestPlaces";
import BestDishes from "../sections/BestDishes";
import Comments from "../sections/Comments";
import "../data/city";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForeCastCards from "../components/ForecastCards";
import { cities } from "../data/city";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-may";


function CityPage() {
  
  const { city_id } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("city_id: " + city_id);
    // Function to fetch city data from the JSON file
    const fetchCities = async () => {
      try {
        const matchedCity = cities.find((city) => city.name === city_id);

        if (matchedCity) {
          setCityData(matchedCity);
          setLoading(false);
        } else {
          console.error(`City with name ${city_id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };

    // Call the fetchCities function
    fetchCities();
  }, [city_id]);
  //whenever the id changes the useEffect need to be updated
  if (loading)
    return (
      <div className="flex flex-row gap-2 justify-center items-center my-10 h-screen">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    );
  if (cityData)
    return (
      <>
        <Navbar />
        <City
          id={cityData.id}
          name={cityData.name}
          country={cityData.country}
          currency={cityData.currency}
          timezone={cityData.timezone}
          language={cityData.language}
          culture1={cityData.culture1}
          culture2={cityData.culture2}
        />
        <ForeCastCards cityName={cityData.name} />
        <BestPlaces destinations={cityData.destinations} />
        <BestDishes dishes={cityData.dishes} />
        <Comments city_id={city_id} />
        <Footer />
      </>
    );
}

export default CityPage;

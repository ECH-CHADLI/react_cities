import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";
import getCoordinates from "../commun/getcoordinates";

const ForeCastCards = ({ cityName }) => {
  const API_KEY = "5b20e67cf85a0c3bc8d73c6eacde70ff";
  const [foreCast, setForeCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeatherInfo = async (lat, lon) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok)
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      const data = await response.json();
      const uniqueForeCastDays = [];
      // filtering the response's data to get only the current day's weather details and also the weather details of the next 5 days
      const fiveDaysForecast = data.list.filter((foreCast) => {
        const foreCastDate = new Date(foreCast.dt_txt).getDate();
        if (!uniqueForeCastDays.includes(foreCastDate)) {
          return uniqueForeCastDays.push(foreCastDate);
        }
      });
      setForeCast(fiveDaysForecast);
      setError(null);
      // setLoading(false);
    } catch (err) {
      setError(err.message);
      setForeCast(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const test = async () => {
      const { lat, lon } = await getCoordinates(cityName, API_KEY);
      await getWeatherInfo(lat, lon);
    };
    test();
  }, [cityName]);

  if (error)
    return (
      <div className="w-fit bg-red-600 m-auto rounded-md p-2">
        <p className="text-[#F5F5F5] font-semibold">
          {`There is a problem fetching the weather data - ${error}`}
        </p>
      </div>
    );

  if (loading)
    return (
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    );
  if (foreCast)
    return (
      <div className=" forecast-cards-container flex justify-center items-center gap-5 mx-20">
        {foreCast.map((element) => (
          <ForecastCard
            key={element.dt}
            date={element.dt_txt.split(" ")[0]}
            weatherIcon={element.weather[0].icon}
            temp={Math.floor(element.main.temp - 273.15)}
            humidity={element.main.humidity}
            wind={element.wind.speed}
          />
        ))}
      </div>
    );
};

ForeCastCards.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default ForeCastCards;

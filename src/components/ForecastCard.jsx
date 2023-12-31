import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ForecastCard = ({ date, weatherIcon, temp, humidity, wind }) => {
  const currentHour = new Date().getHours();
  const [backgroundGradient, setBackgroundGradient] = useState(currentHour);

  useEffect(() => {
    // Conditionally set the background gradient based on the time of the day
    if (currentHour < 18 && currentHour >6) {
      setBackgroundGradient('bg-gradient-to-b from-yellow-50 via-blue-200 to-blue-300 text-black');

    } else {
      setBackgroundGradient('bg-gradient-to-b from-black via-blue-900 to-indigo-900 text-white');
    }
  }, [currentHour]);
  return (
    <div className={`forecast-card ${backgroundGradient} h-82 lg:h-72 xl:h-72 w-52 rounded-2xl`}>
      <h2 className="text-center mt-3 font-bold text-lg">{date}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
        className=" h-24 md:h-28 m-auto mb-2"
        alt="weather icon"
      />

      <div className="weather-info flex  justify-around flex-col items-center gap-1 pl-2 font-semibold text-base md:text-lg">
        <h3 className="">temperature : {temp}°C </h3>
        <h3>humidity : {humidity}%</h3>
        <h3>wind : {wind} M/S</h3>
      </div>
    </div>
  );
};

ForecastCard.propTypes = {
  date: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default ForecastCard;

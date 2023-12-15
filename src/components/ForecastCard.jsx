import PropTypes from "prop-types";

const ForecastCard = ({ date, weatherIcon, temp, humidity, wind }) => {
  return (
    <div className="forecast-card bg-blue-400 h-72 w-52 rounded-2xl">
      <h2 className="text-center mt-3 font-bold text-lg">{date}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
        className="h-28 m-auto mb-2"
        alt="weather icon"
      />

      <div className="weather-info flex flex-col items-start gap-3 pl-2 font-semibold text-lg">
        <h3>temperature : {temp}°C </h3>
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

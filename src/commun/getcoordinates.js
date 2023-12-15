const getCoordinates = async (cityName, API_KEY) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
  );
  const data = await response.json();
  if (data.length) {
    const { lat, lon } = data[0];
    return { lat, lon };
  }
};

export default getCoordinates;

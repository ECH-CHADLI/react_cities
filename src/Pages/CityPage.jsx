import City from '../sections/City'
import BestPlaces from '../sections/BestPlaces'
import BestDishes from '../sections/BestDishes'
import Comments from '../sections/Comments'
import "../data/cities"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ForeCastCards from '../components/ForecastCards'
//using the server 
import "../data/server"

function CityPage() {
  //using the param from the route
  const params = useParams();
  const [cityData, setCityData] = useState(null);
  useEffect(() => {
    //i will retrieve the data from the route using id in the params for that specific city
    fetch(`/api/cities/${params.name}`)
      .then(res => res.json())
      .then(data => setCityData(data.city))
      console.log("**")
      console.log(cityData)
  },[params.name])
  //whenever the id changes the useEffect need to be updated
  return (
    <>
    {cityData ? (
        <>
          <City id={cityData.id} name={cityData.name} country={cityData.country}
          currency={cityData.currency} timezone={cityData.timezone} language={cityData.language} culture1={cityData.culture1}
          culture2={cityData.culture2}
          />
          <ForeCastCards cityName={cityData.name}/>
          <BestPlaces destinations={cityData.destinations}/>
          <BestDishes dishes={cityData.dishes}/>
          <Comments city_id={params.name} />
        </>
      ) : <h2>Loading...</h2>}
    </>
  )
}

export default CityPage
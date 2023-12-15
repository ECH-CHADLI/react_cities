import React, {useContext, useEffect} from 'react'
import Comments from '../sections/Comments'
import CommentContext from '../Context/commentContext'
import { useParams } from 'react-router-dom';

export default function City() {

    /* const { city_id } = useParams();

    const params = useParams();
    const [cityData, setCityData] = useState(null);
    
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
            <Comments city_id={city_id} />
          </>
        ) : <h2>Loading...</h2>}
      </>
    ) */
}

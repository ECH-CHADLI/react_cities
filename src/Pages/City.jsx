import React, {useContext, useEffect} from 'react'
import Comments from '../sections/Comments'
import CommentContext from '../Context/commentContext'
import { useParams } from 'react-router-dom';

export default function City() {

    const { city_id } = useParams();

  // Access the CommentContext to get the city_id
  //const { city_id } = useContext(CommentContext);

  useEffect(() => {
    // Log the city_id from the route parameters
    console.log('City ID from route parameters:', city_id);

    // Log the city_id from the CommentContext
    //console.log('City ID from CommentContext:', contextCityId);

    // Your city-related logic goes here
  }, [city_id]);

    return (
        <div>
            <Comments city_id={city_id} />
        </div>
    )
}

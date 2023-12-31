import React, {useContext, useEffect, useState} from 'react'
import Comments from '../sections/Comments'
import CommentContext from '../Context/commentContext'
import { useParams } from 'react-router-dom';

export default function City() {

    const { city_id } = useParams();

    return (
        <div>
            <Comments city_id={city_id} />
        </div>
    )
}

/* TODO:
      1) retrieve parent comment id for subcomment
      2) clear input after submit
      3) not write across all reply inputs, give it an id name
*/
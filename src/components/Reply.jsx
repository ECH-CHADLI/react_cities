import React from "react"
import ReplyInput from "./ReplyInput";
//import { useSpring, animated } from 'react-spring';
const Reply = ({content, user}) => {
  const [like, setLike] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [showReply, setShowReply] = React.useState(false);
  function likeHandler(){
    if(!liked){
      setLike(prevNum => prevNum + 1)
      setLiked(true);
    }else{
      setLike(prevNum => prevNum - 1)
      setLiked(false)
    }
  }

  /* const heartAnimation = useSpring({
    transform: liked ? 'scale(1.2)' : 'scale(1)',
    fill: liked ? "#ff0000" : 'transparent',
    color: liked ? '#ff0000' : 'black',
    backgroundColor: liked ? '#ff0000' : 'transparent',
  }); */

  return (
    <div className="bg-slate-50 flex flex-col justify-center mx-auto border shadow-lg shadow-neutral-500 w-11/12
    rounded-lg p-2 mb-4 ml-32">
      <div className="flex flex-col gap-3 ml-3 text-neutral-600">
        <div className="flex items-center justify-start gap-2">
          <i className="fa-regular fa-circle-user fa-xl text-neutral-600"></i>
          <p className="text-base">{user}</p>
        </div>  
        <p className="text-sm text-left
        text-neutral-600 indent-3">
          {content}
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <div className="text-neutral-500  flex items-center  gap-2 ">
            <h6>{like}</h6>
            <i className="fa-regular fa-heart fa-xs my-auto text-neutral-500 " onClick={likeHandler}></i>
            {/* <animated.button
                onClick={likeHandler}
                style={heartAnimation}
                className="like-button"
                >
                <span role="img" aria-label="heart">
                    ❤️
                </span>
            </animated.button> */}
        </div>
      </div>
      </div>
  )
}

export default Reply; 
import React from "react"
import ReplyInput from "./ReplyInput";
import { useSpring, animated } from 'react-spring';
import { UilHeart } from '@iconscout/react-unicons'
const Comment = ({id, content, user, city_id}) => {
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
  function addReply(){
    console.log("adding a reply");
    setShowReply(true);
    console.log(showReply); 
  }

  const heartAnimation = useSpring({
    transform: liked ? 'scale(1.2)' : 'scale(1)',
    fill: liked ? "#ff0000" : 'transparent',
  });

  return (
    <div className="bg-slate-50 flex flex-col justify-center mx-auto border shadow-lg shadow-neutral-500 w-11/12
    rounded-lg p-2 mb-4" id={id}>
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
          {liked ?
              <i className="fa-solid fa-heart my-auto text-red-500" onClick={likeHandler}></i>
              : <i className="fa-regular fa-heart text-neutral-500 my-auto" onClick={likeHandler}></i>
          }
        </div>
      
        <button className="text-neutral-500  mr-4 flex items-center gap-2" onClick={addReply}>
          Add a reply
          <i className="fa-solid fa-reply fa-xs"></i>
        </button>
      </div>
      <div></div>
      {showReply && <ReplyInput parent_id={id} city_id={city_id}/>}
      </div>
  )
}

export default Comment 
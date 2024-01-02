import React, { useEffect, useState } from "react"
import ReplyInput from "./ReplyInput";
//import { useSpring, animated } from 'react-spring';
const Comment = ({id, content, user, authuser, city_id}) => {

  const [like, setLike] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [showReply, setShowReply] = React.useState(false);

  const [pulse, setPulse] = useState(false); 

  function likeHandler(comment_id){

    setPulse(true);

    const dynamiCommentProp = `comment_${comment_id}`;

    if(!localStorage.getItem('likes')) {
      localStorage.setItem('likes', JSON.stringify([]));
    }

    const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
    const existingLikes = storedLikes.findIndex(like => Object.keys(like)[0] === dynamiCommentProp);
    const updateLikes = [...storedLikes];

    if(!liked){
      //setLike(prevNum => prevNum + 1)
      setLiked(true);

      if(existingLikes !== -1) {
        updateLikes[existingLikes][dynamiCommentProp].push(authuser);
      } else {
        updateLikes.push({ [dynamiCommentProp]: [authuser] });
      }

    } else{
      //setLike(prevNum => prevNum - 1)
      setLiked(false)
      
      if(existingLikes !== -1) {
        updateLikes[existingLikes][dynamiCommentProp].splice(existingLikes, 1);
      }

      localStorage.setItem('likes', JSON.stringify(updateLikes));

    }
  }
  
  console.log('likes: ', localStorage.getItem('likes'));
  function addReply(){
    console.log("adding a reply");
    setShowReply(true);
    console.log(showReply); 
  }

  const isPulsing = pulse ? 'animate-bounce' : '';

  const getLikes = (comment_id, authuser) => {
    
    const dynamiCommentProp = `comment_${comment_id}`;
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
    const existingLikes = storedLikes.findIndex(like => Object.keys(like)[0] === dynamiCommentProp);

    let number_likes = 0

    if(existingLikes !== -1) {

      const usersArray = storedLikes[existingLikes][dynamiCommentProp];
      const userIndex = usersArray.indexOf(authuser);

      if(userIndex === true) {
        setLiked(true);
        setPulse(true);
      }

      number_likes = storedLikes[existingLikes][dynamiCommentProp].length;
      return number_likes;

    } else {
      return number_likes;
    }

  }

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
          <h6>{getLikes(id, authuser)}</h6>
          {liked ?
              <i className={`${isPulsing} fa-solid fa-heart my-auto text-red-500`} onClick={() => likeHandler(id)}></i>
              : <i className="fa-regular fa-heart text-neutral-500 my-auto" onClick={() => likeHandler(id)}></i>
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
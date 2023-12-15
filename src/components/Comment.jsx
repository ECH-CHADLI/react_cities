import React from "react"
import Reply from "./Reply";
//import { useSpring, animated } from 'react-spring';
const Comment = ({comment, showReply, setShowReply, city_id}) => {
  //console.log("Comment Component");
  //console.log(comment);
  const [like, setLike] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
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

  /* const heartAnimation = useSpring({
    transform: liked ? 'scale(1.2)' : 'scale(1)',
    fill: liked ? "#ff0000" : 'transparent',
    color: liked ? '#ff0000' : 'black',
    backgroundColor: liked ? '#ff0000' : 'transparent',
  }); */

  return (
    <div className="bg-slate-50 flex flex-col justify-center mx-auto border shadow-lg shadow-neutral-500 w-11/12
    rounded-lg p-2 mb-4">
      <div className="flex flex-col gap-3 ml-3 text-neutral-600">
        <div className="flex items-center justify-start gap-2">
          <i className="fa-regular fa-circle-user fa-xl text-neutral-600"></i>
          <p className="text-base">Meryeme Brika</p>
        </div>  
        <p className="text-sm text-left
        text-neutral-600 indent-3">
          {{comment} && "I recently visited this city, and it was an absolute delight! The city's vibrant culture, stunning architecture, and delicious cuisine left a lasting impression on me. From exploring the historic neighborhoods, every moment was filled with excitement. The friendly locals and the beautiful Mediterranean atmosphere added to the overall charm of the experience. I can't wait to visit again and discover even more hidden gems in this incredible city!"}
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
      
        <button className="text-neutral-500  mr-4 flex items-center gap-2" onClick={addReply}>
          Add a reply
          <i className="fa-solid fa-reply fa-xs"></i>
        </button>
      </div>
      <div></div>
      {showReply && <Reply city_id={city_id} />}
      </div>
  )
}

export default Comment 
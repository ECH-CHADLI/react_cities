import React from "react"

const Reply = ({id, content, user}) => {
  const [like, setLike] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [pulse, setPulse] = React.useState(false); 
  
  function likeHandler(){
    if(!liked){
      setLike(prevNum => prevNum + 1)
      setLiked(true);
      setPulse(true);
    }else{
      setLike(prevNum => prevNum - 1)
      setLiked(false)
      setPulse(false);
    }
  }

  const isPulsing = pulse ? 'animate-bounce' : '';

  return (
    <div className="bg-slate-50 flex flex-col justify-center mx-auto border shadow-lg shadow-neutral-500 w-3/4
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
            {liked ?
              <i className={`${isPulsing} fa-solid fa-heart my-auto text-red-500`} onClick={likeHandler}></i>
              : <i className="fa-regular fa-heart text-neutral-500 my-auto" onClick={likeHandler}></i>
            }
        </div>
      </div>
      </div>
  )
}

export default Reply; 
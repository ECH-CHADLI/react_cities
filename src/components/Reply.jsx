import { React, useContext } from "react";
import CommentContext from "../Context/commentContext";

const Reply = ({ city_id }) => {

  const { comments, inputHandler, submitReply, errors } = useContext(CommentContext);

    return (
      <form className="flex justify-center items-stretch w-4/5 border-collapse mx-auto m-4 ">
        <input 
          name="subcomment"
          value={comments.subcomment} 
          onChange={inputHandler}
          type="text" placeholder="Add your comment..."
          className="indent-3 text-sm py-1 w-full text-neutral-700 border-neutral-600 rounded-l-lg"
        />
        {/* {errors.subcomment && <span className="text-sm text-red-500">{errors.subcomment[0]}</span>} */}
        <button type="submit" 
          className="bg-neutral-700 flex-1 px-4 text-neutral-100 rounded-r-lg"
          onClick={(e) => submitReply(e, city_id, 8)}
        >
          Add
        </button>
      </form>
    )
  }
  
  export default Reply
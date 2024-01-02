import { React, useContext } from "react";
import CommentContext from "../Context/commentContext";

const CommentInput = ({ city_id }) => { //{comment,setComment, submitted, setSubmitted}
  
  const { review, inputHandler, submitComment } = useContext(CommentContext);

  return (
    <form className="flex items-stretch w-full border-collapse">
      <input 
        name="comment"
        value={review.comment} 
        onChange={inputHandler}
        type="text" placeholder="Add your comment..." 
        className="indent-3 text-sm py-3 w-full text-neutral-700 border-neutral-600 rounded-l-lg"
      />
      {/* {errors.comment && <span className="text-sm text-red-500">{errors.comment[0]}</span>} */}
      <button type="submit" 
        className="bg-neutral-700 flex-1 px-4 text-neutral-100 rounded-r-lg"
        onClick={(e)=>submitComment(e, city_id)}
      >
        Add
      </button>
    </form>
  )
}

export default CommentInput

/* 
if(comments.trim() !== ""){
                setSubmitted(true);
                //reset the input
                setComments(""); 
            }
*/
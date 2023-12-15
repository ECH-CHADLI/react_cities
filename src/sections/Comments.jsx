import Comment from "../components/Comment"
import CommentInput from "../components/CommentInput"
import React, {useEffect, useContext} from "react"
/* import axios from "axios"
import { useParams } from 'react-router-dom';
import { list } from "postcss";  */
import CommentContext from "../Context/commentContext";

const Comments = ({ city_id }) => {
  const [comment, setComment] = React.useState("");
  //const [comments, setComments] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [showReply, setShowReply] = React.useState(false);

  /* useEffect(() => {
    const fetchComments = async() => {
        try{
            const response = await axios.get(`/api/comments/${cityId}`);
            setComment(response.data);
        }catch(err) {
            console.error('Error fetching comments: ', err);
        } 
    }
    fetchComments();
  }, [cityId]); */

  const {comments} = useContext(CommentContext);

  return (
      <div>
          <div className="bg-neutral-100 flex flex-col gap-6 items-center p-4 w-full">
            comments
            <CommentInput city_id={city_id} />
            <ul className="w-full">
              <li><Comment comment={"hehehehehehe"} showReply={showReply} setShowReply={setShowReply} city_id={city_id}/></li> 
            </ul>
          </div> 
      </div>
  )
}

export default Comments;



/* in return */
/* <div className="bg-neutral-100 flex flex-col gap-6 items-center p-4 w-full">
      comments
      <CommentInput 
        comment={comment} 
        setComment={setComment} 
        submitted={submitted} 
        setSubmitted={setSubmitted}
      />
      <ul>
        {comments.map(comment => {
            <li key={comment.id}>{comment.content}</li>
        })}
      </ul>
      <ul className="w-full">
        <li >{submitted && <Comment comment={comment}/>}</li>
        <li><Comment comment={""} showReply={showReply} setShowReply={setShowReply}/></li> 
      </ul>
    </div> */

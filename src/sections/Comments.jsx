import Comment from "../components/Comment"
import CommentInput from "../components/CommentInput"
import React, {useEffect, useContext, useState} from "react"
import CommentContext from "../Context/commentContext";
import Reply from "../components/Reply";

const Comments = ({ city_id }) => {

  const [comments, setComments] = useState([{}]);

  const { showingComments, sentComment } = useContext(CommentContext);

  useEffect(() => {
    const fetchComments = async() => {
      try {
        const resultComments = await showingComments(city_id);
        console.log(JSON.stringify(resultComments))
        setComments(resultComments); // if working with storedComments parse it first -> JSON.parse
        console.log('comments: ' + JSON.stringify(comments)); 
      } catch(err) {
        console.error('Error fetching comments: ' + err);
      }
    }

    fetchComments();

  }, [city_id, sentComment]);

  return (
      <div>
          <div className="bg-neutral-100 flex flex-col gap-6 items-center p-4 w-full">
            comments
            <CommentInput city_id={city_id} />
            <ul className="w-full">
              { comments && comments.map((comment) => (
                  <>
                    {comment.parent_id === null && (
                      <li key={comment.id}>
                        <Comment id={comment.id} content={comment.content} user={comment.user} authuser={comment.authuser} city_id={city_id}/>
                      </li>
                    )}
                    {comment.subcomments && comment.subcomments.length > 0 && ( /* first thing check if the array is a truthy or falsy value, if it is truthy you can access its methods */
                      comment.subcomments.map((subcomment) => ( /* when it's said that you can't access property -> check if what you're searching for is defined first */
                        <li key={subcomment.id}>
                          <Reply id={subcomment.id} content={subcomment.content} user={subcomment.user} />
                        </li> 
                      ))
                    )}
                  </>
              ))}
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

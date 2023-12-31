import { React, createContext, useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/';

const CommentContext = createContext();

export const CommentContextProvider = ({children}) => {

    const [review, setReview] = useState({
        comment: "",
        //subcomment: {}
    });

    const [errors, setErrors] = useState({});
    
    const [commentId, setCommentId] = useState(null);

    // onChange function for a comment and a reply
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setReview({...review, [name]: value});
        console.log(review);
    }

    // submitting a comment or reply
    async function submitComment(event, city_id){
        event.preventDefault();
        try {
            const response_auth_user = await axios.get("authuser" , {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            console.log("user id: ", response_auth_user.data.user.id)

            const commentData = {
                id: 1, 
                user_id: response_auth_user.data.user.id,
                content: review.comment,
                parent_id: null
            }
            console.log("comments: ", commentData)

            await axios.post('comments/' + city_id, commentData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            alert('comment sent');
        } catch(err) {
            //setErrors(err.response.data.errors);
            console.log('error: '+ err);
        }
    }

    async function submitReply(event, city_id, comment_id){
        event.preventDefault();
        try {
            const response_auth_user = await axios.get("authuser" , {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            console.log("user id: ", response_auth_user.data.user.id)

            const response_comment_id = await axios.get("comment/" + comment_id, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            
            const commentData = {
                id: 1, 
                user_id: response_auth_user.data.user.id,
                content: review[`subcomment-${response_comment_id.data.id}`],
                parent_id: response_comment_id.data.id
            }
            console.log("comments: ", commentData)

            await axios.post('comments/' + city_id, commentData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            //localStorage.setItem(`subcomment-${commentData.id}`, `subcomment-${commentData.id}`);

            alert('comment sent');
        } catch(err) {
            setErrors(err.response.data.errors);
            console.log('error: '+ err);
        }
    }

    const showingComments = async(city_id) => {
        try {
            const response_show_comments = await axios.get('comments/get/' + city_id, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            const formattedComments = response_show_comments.data.map(comment => ({
                id: comment.id,
                user: comment.user.name, 
                content: comment.content,
                parent_id: comment.parent_id,
                subcomments: comment.subcomments.length !== 0 ? comment.subcomments.map(subcomment => ({
                    id: subcomment.id,
                    user: subcomment.user.name, 
                    content: subcomment.content,
                })) : []
            }));
            //console.log('formatted subs: ', JSON.stringify(formattedComments[4].subcomments))
            return formattedComments;
        } catch (e) {
            console.error('error in formatting comments: ', e);
        }
    }

    return (
        <CommentContext.Provider value={{review, inputHandler, submitComment, submitReply, showingComments, commentId, errors}}>
            {children}
        </CommentContext.Provider>
    )
}


export default CommentContext;


/* setComments(prevComments => ({
                ...prevComments,
                id: 1, 
                user_id: response_auth_user.data.user.id,
                content: content.subcomment,
                parent_id: response_comment_id.data.id
            })); */
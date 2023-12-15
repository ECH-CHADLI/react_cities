import { React, createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/';

const CommentContext = createContext();

export const CommentContextProvider = ({children}) => {

    const [comments, setComments] = useState({
        id: null,
        user_id: null,
        content: "",
        parent_id: null
    });

    const [content, setContent] = useState({
        comment: "",
        subcomment: ""
    });

    const [errors, setErrors] = useState({});

    //const { city_id } = useParams();

    // onChange function for a comment and a reply
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setContent({...content, [name]: value});
        console.log(content);
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

            setComments(prevComments => ({
                ...prevComments,
                id: 1, 
                user_id: response_auth_user.data.user.id,
                content: content.comment,
                parent_id: null
            }));
            console.log("comments: ", comments)

            await axios.post('comments/' + city_id, comments, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            alert('comment sent');
        } catch(err) {
            //setErrors(err.response.data.errors);
            console.log('error: '+ err);
        }
        /* if(comments.trim() !== ""){
            setSubmitted(true);
            //reset the input
            setComments(""); 
        } */
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
            console.log('***: ' + response_comment_id.data.id);
            setComments(prevComments => ({
                ...prevComments,
                id: 1, 
                user_id: response_auth_user.data.user.id,
                content: content.subcomment,
                parent_id: response_comment_id.data.id
            }));
            console.log("comments: ", comments)

            await axios.post('comments/' + city_id, comments, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            console.log('****');
            alert('comment sent');
        } catch(err) {
            //setErrors(err.response.data.errors);
            console.log('error: '+ err);
        }
    }

    return (
        <CommentContext.Provider value={{comments, content, inputHandler, submitComment, submitReply, errors}}>
            {children}
        </CommentContext.Provider>
    )
}


export default CommentContext;
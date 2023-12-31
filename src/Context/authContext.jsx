import { React, createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Read the authentication state from localStorage on component mount
        return localStorage.getItem('authToken') !== null;
      });

    const register = async (e) => {
        e.preventDefault();
        console.log('Form Values:', formValues);
        
        try {
            const response = await axios.post('register', formValues, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }); // in post methods we use try catch, sending (GET: retrieving, that's why we put it in a variable)
            
            const authName = response.data.user.name;
            const authToken = response.data.token;
            localStorage.setItem('authName', authName);
            localStorage.getItem('authToken', authToken);
            console.log(authName);

            setIsAuthenticated(true);
            navigate("/home");
        } catch(err) {
            //console.error('Registration Error:', err); // Add this line
            if(err.response.status === 422) { // 422 status code: the server can't porcess the request, although it understands it
                setErrors(err.response.data.errors); // comes from an Axios error object. Meaning from laravel!
            }
        }
    }

    const login = async (e) => {
        e.preventDefault();
        const {email, password} = formValues;

        try {
            const response = await axios.post('login', {email, password}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }); // in post methods we use try catch, sending (GET: retrieving, that's why we put it in a variable)
            
            const authName = response.data.user.name;
            const authToken = response.data.token;
            localStorage.setItem('authName', authName);
            localStorage.setItem('authToken', authToken);
            console.log(authName);

            setIsAuthenticated(true);
            navigate("/home");
        } catch(err) {
            if(err.response.status === 422) { 
                setErrors(err.response.data.errors); 
            }
            console.error("error: " + err)
        }
    }

    const logout = async (e) => {
        e.preventDefault();
        try {
            // Send a request to the server to revoke the access tokens
            await axios.post('logout', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            // Clear localStorage and update state on successful logout
            localStorage.removeItem('authName');
            localStorage.removeItem('authToken');
            setIsAuthenticated(false);
            navigate('/');
          } catch (error) {
            console.error('Logout Error:', error);
          }
    }

    const onChange = (e) => { // event: extracting the name and the value as put below
        const { name, value } = e.target; // name and value of the input
        setFormValues({...formValues, [name]: value});
    }

    return (
        <AuthContext.Provider value={{formValues, register, login, logout, onChange, errors, isAuthenticated}}> {/* The outer curly braces create the JSX expression, and the inner curly braces create an object literal. */}
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

/* export default can be invoked only once in a module(file), and can be called by any name when imported as long as you indicate the file, and no need for curly braces */
/* export const can be invoked multiple times in a module, and when imported it should be called by its exact name, with the need of curly braces */


/* GET
    Usually, successful GET requests return the expected data.
    While you might still want to handle errors (like network issues or unexpected response formats), 
    it's common not to wrap every GET request in a try-catch block unless there's a specific need for it.
*/

/* POST
    In POST requests, you often want to handle both success and error scenarios explicitly.
    Try-catch is commonly used to catch errors, especially HTTP errors 
    (like status code 422 for validation errors) that might be returned by the server.
*/
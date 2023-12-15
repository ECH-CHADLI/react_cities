import React from 'react';
import { useContext } from 'react';
import AuthContext from '../Context/authContext';

function SignUpForm() {

    const {formValues, register, onChange, errors} = useContext(AuthContext); // useContext returns an object not an array

    return (
        <form onSubmit={register}>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                    name="name" 
                    value={formValues.name} 
                    onChange={onChange} 
                    type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                {errors.name && <span className='text-sm text-red-500'>{errors.name[0]}</span>}
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input 
                    name="email" 
                    value={formValues.email} 
                    onChange={onChange} 
                    type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                {errors.email && <span className='text-sm text-red-500'>{errors.email[0]}</span>}
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                    name="password" 
                    value={formValues.password} 
                    onChange={onChange} 
                    type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                {errors.password && <span className='text-sm text-red-500'>{errors.password[0]}</span>}
            </div>
            <div className="mb-6">
                <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input 
                    name="password_confirmation" 
                    value={formValues.password_confirmation} 
                    onChange={onChange} 
                    type="password" id="password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                {errors.password_confirmation && <span className='text-sm text-red-500'>{errors.password_confirmation[0]}</span>}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    );
}

export default SignUpForm;

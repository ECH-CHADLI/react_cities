import React, { useContext } from 'react';
import AuthContext from '../Context/authContext';

export default function Login() {

    const {formValues, login, onChange, errors} = useContext(AuthContext); // useContext returns an object not an array
    
    return (
        <form onSubmit={login} className=" m-auto justify-center flex flex-col w-full h-[80%] mx-auto">
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-black">Email address</label>
            <input
            name="email"
            value={formValues.email}
            onChange={onChange}
            type="email"
            id="email"
            className="input-style"
            placeholder="john.doe@company.com"
            required
            />
            {errors.email && <span className='text-xs text-red-500'>{errors.email[0]}</span>}
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 dark:text-black">Password</label>
            <input
            name="password"
            value={formValues.password}
            onChange={onChange}
            type="password"
            id="password"
            className="input-style"
            placeholder="•••••••••"
            required
            />
            {errors.password && <span className='text-xs text-red-500'>{errors.password[0]}</span>}
        </div>
        <button
            type="submit"
            className="button-style self-end"
        >
            Submit
        </button>
</form>

    );
}
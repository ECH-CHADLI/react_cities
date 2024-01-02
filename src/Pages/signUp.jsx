import React from 'react';
import { useContext } from 'react';
import AuthContext from '../Context/authContext';

function SignUpForm() {

    const {formValues, register, onChange, errors} = useContext(AuthContext); // useContext returns an object not an array

    return (
    <form onSubmit={register} className="flex flex-col w-full mx-auto my-auto">
        <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-black">Name</label>
        <input
        name="name"
        value={formValues.name}
        onChange={onChange}
        type="text"
        id="name"
        className="input-style"
        placeholder="John Doe"
        required
        />
        {errors.name && <span className='text-xs text-red-500'>{errors.name[0]}</span>}
    </div>
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
        <label htmlFor="password" className="  block mb-2 text-sm font-medium text-gray-700 dark:text-black">Password</label>
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
    <div className="mb-6">
        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-700 dark:text-black">Confirm password</label>
        <input
        name="password_confirmation"
        value={formValues.password_confirmation}
        onChange={onChange}
        type="password"
        id="password_confirmation"
        className="input-style"
        placeholder="•••••••••"
        required
        />
        {errors.password_confirmation && <span className='text-xs text-red-500'>{errors.password_confirmation[0]}</span>}
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

export default SignUpForm;
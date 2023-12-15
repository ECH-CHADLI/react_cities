import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../Context/authContext'

export default function ProtectedRoute() {

    const { isAuthenticated } = useContext(AuthContext);
    console.log('isAuthenticated: ', isAuthenticated)
    return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

/* an Outlet is a component provided by React Router that serves as a placeholder where child routes will be rendered. */

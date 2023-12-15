import React, { useContext } from 'react'
import AuthContext from '../Context/authContext'
import Logout from '../components/Logout';

const HomePage = () => {

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h1>HomePage</h1>
      <a href="/city/Fes">go to fes</a>
      <Logout />
    </div> 
  )
}

export default HomePage
import React, { useContext } from 'react'
import AuthContext from '../Context/authContext'

export default function Logout() {

    const { logout } = useContext(AuthContext);

  return (
    <form onSubmit={logout}>
      <button className='text-white'>Logout</button>
    </form>
  )
}

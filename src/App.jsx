import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUpForm from './Pages/signUp'
import HomePage from './Pages/HomePage';
import { AuthContextProvider } from './Context/authContext';
import City from './Pages/City';
import {CommentContextProvider} from './Context/commentContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './Pages/Login';
import CityPage from './Pages/CityPage';

export default function App() {
  return (
    <>
        <AuthContextProvider>
            <CommentContextProvider>
                <Routes>
                    <Route path='/' element={<SignUpForm />} />
                    <Route path='/login' element={<Login />} />
                    
                    <Route path='/home' element={<HomePage />} />
                    <Route element={<ProtectedRoute />}>   
                        <Route path='/city/:city_id' element={<City />} />
                    </Route>
                    <Route path='/cities/:name' element={<CityPage />} />
                </Routes>
            </CommentContextProvider>
        </AuthContextProvider>
    </>
  )
}


/* 
<BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cities" element={<Cities />}/>
          <Route path="cities/:id" element={<CityPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
*/
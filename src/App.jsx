import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUpForm from './Pages/signUp'
import HomePage from './Pages/HomePage';
import { AuthContextProvider } from './Context/authContext';
import {CommentContextProvider} from './Context/commentContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './Pages/Login';
import CityPage from './Pages/CityPage';
import CountryPage from './Pages/CountryPage';
import AboutPage from './Pages/AboutPage';
import AuthPage from './Pages/AuthPage';
import LandingPage from './Pages/LandingPage';

export default function App() {
  return (
    <>
        <AuthContextProvider>
            <CommentContextProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path='/authentification' element={<AuthPage />} />
                    {/* <Route path='/' element={<SignUpForm />} />
                    <Route path='/login' element={<Login />} /> */}

                    <Route element={<ProtectedRoute />}>   
                        <Route path='/home' element={<HomePage />} />
                        {/* <Route path='/city/:city_id' element={<City />} /> */}
                        <Route path='/cities/:city_id' element={<CityPage />} />
                        <Route path='/country/:country_name' element={<CountryPage />} />
                        <Route path='/about' element={<AboutPage />} />
                    </Route>

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
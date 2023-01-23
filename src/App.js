import React, { useState } from 'react'
import AboutPage from './page/AboutPage'
import Homepage from './page/HomePage'
import { Routes, Route, Navigate } from 'react-router-dom';
import Productpage from './page/Productpage';
import ProductDetailpage from './page/ProductDetailpage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  // PrivateRoute component
  const PrivateRoute = () => {
      return authenticate === true ? <UserPage/> : <Navigate to='/login' />
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<Productpage/>}/>
        <Route path='/products/:id' element={<ProductDetailpage/>}/>  {/* 파라미터는 가변적으로 변할 수 있음 */}
        <Route path='/login' element={<LoginPage/>}/>
        {/* Route가 가지는 속성 경로(path), 보여줄 요소(element) */}

        {/* Redirect */}
        {/* 가면 안되는 페이지 => 보호해야할 페이지 : ex) profile*/}
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  )
}

export default App

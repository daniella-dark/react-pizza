import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>   
        <Route path='/cart' element={<Cart />} />  
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter

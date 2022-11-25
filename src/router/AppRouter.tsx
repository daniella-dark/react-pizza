import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import { Loader } from '../components';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'../pages/Cart'))

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />}/>   
        <Route
          path='cart'
          element={
            <React.Suspense fallback={<Loader/>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter

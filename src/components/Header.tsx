import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import PizzaLogo from '../assets/img/pizza-logo.png'
import { Search } from './';
import CartImg from '../assets/img/CartImg';
import { cartSelector } from '../redux/cart/selectors';
import { clearFilters } from '../redux/filter/slice';

export const Header: React.FC = () => {
  const isMounted = React.useRef(false)

  const dispatch = useDispatch()
  const { items, totalPrice, totalCount } = useSelector(cartSelector)

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('cart', json)
    }
    isMounted.current = true
  }, [items])
  
  return (
    <div className="header">
      <div className="container">
        <Link to='/' className="header__logo" onClick={() => dispatch(clearFilters())}>
          <img width={40} height={40} src={PizzaLogo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца</p>
          </div>
        </Link>

        <div className="header__leftBlock">
          <Search />
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
              <CartImg />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
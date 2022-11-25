import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' 
import { clearPizzas } from '../redux/cart/slice'
import { cartSelector } from '../redux/cart/selectors'

import { CartItem, CartEmpty } from '../components'

import ArrowLeft from '../assets/img/ArrowLeft'
import Trash from '../assets/img/Trash'

const Cart: React.FC = () => {
  const { items, totalPrice, totalCount } = useSelector(cartSelector)
  const dispatch = useDispatch()

  return (
    <div className="container">
      { items.length > 0
        ? <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              Корзина
            </h2>
            <div onClick={() => dispatch(clearPizzas())} className="cart__clear">
              <Trash />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="cart__content-items">
            {items.map((item: any) => 
              <CartItem
                key={`${item.id}_${item.type}_${item.size}`}
                {...item} />
            )}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span> Всего пицц: <b>{totalCount} шт.</b> </span>
              <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to='/' className="button button--secondary go-back-btn">
                <ArrowLeft />
                <span>Вернуться назад</span>
              </Link>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
          </div>
        : <CartEmpty />
      }
    </div>
  )
}

export default Cart

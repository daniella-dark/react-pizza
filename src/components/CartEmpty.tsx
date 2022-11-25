import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from '../assets/img/ArrowLeft'
import cartEmptyImg from '../assets/img/empty-cart.png'

export const CartEmpty: React.FC = () => {
  return (
        <div className="cart cart--empty">
        <h2>Корзина пустая 😕</h2>
        <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
            <div className="cart__bottom-buttons" style={{justifyContent: 'center'}}>
                <Link to="/" className="button button--secondary go-back-btn" style={{height: '54px'}}>
                    <ArrowLeft />
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
  )
}

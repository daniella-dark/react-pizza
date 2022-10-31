import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="container">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            Корзина
          </h2>
          <div className="cart__clear">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5H4.16667H17.5" stroke="#7b7b7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#7b7b7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.33337 9.16667V14.1667" stroke="#7b7b7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.6666 9.16667V14.1667" stroke="#7b7b7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="cart__content-items">
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>Сырный цыпленок</h3>
              <p>тонкое тесто, 26 см</p>
            </div>
            <div className="cart__item-count">
              <div className="button button--secondary button--circle cart__item-count-minus">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                  <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#232323"/>
                </svg>
              </div>
              <b>2</b>
              <div className="button button--secondary button--circle cart__item-count-plus">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#232323"/>
                  <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#232323"/>
                </svg>
              </div>
            </div>
            <div className="cart__item-price">
              <b>770 ₽</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--secondary button--circle">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#232323"/>
                  <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#232323"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span> Всего пицц: <b>3 шт.</b> </span>
            <span> Сумма заказа: <b>900 ₽</b> </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to='/' className="button button--secondary go-back-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 1.84 3.18">
                <path d="M1.76 1.42c0.05,0.04 0.08,0.1 0.08,0.17 0,0.07 -0.02,0.13 -0.07,0.17l-0.18 0.18 -0.39 0.39 -0.78 0.78c-0.1,0.1 -0.25,0.1 -0.35,0l0 0c-0.09,-0.09 -0.09,-0.25 0,-0.35l1.17 -1.17 -1.17 -1.17c-0.09,-0.1 -0.09,-0.25 0,-0.35l0 0c0.1,-0.09 0.25,-0.09 0.35,0l1.17 1.17c0.06,0.06 0.12,0.12 0.17,0.18z" fill="#232323"/>
              </svg>
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

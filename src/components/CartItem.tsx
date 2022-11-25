import React from 'react'
import { useDispatch } from 'react-redux'
import Close from '../assets/img/Close';
import Minus from '../assets/img/Minus';
import Plus from '../assets/img/Plus';
import { addPizza, removePizza, minusItem } from '../redux/cart/slice'
import { TCartItem } from '../redux/cart/types';

type CardItemProps = {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    type: string;
    size: number;
    count: number;
}

export const CartItem: React.FC<CardItemProps> = ({ id, title, imageUrl, price, type, size, count }) => {

    const dispatch = useDispatch()

    const onClickPlus = () => {
        dispatch(addPizza({
            id,
            type,
            size,
        } as TCartItem))
    }

    const onClickMinus = () => {
        if (count > 1)
            dispatch(minusItem({
                id,
                type,
                size,
            } as TCartItem))
    }

    const onClickRemove = () => {
        dispatch(removePizza(
            `${id}_${type}_${size}`
        ))
    }

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>{type} тесто, {size} см</p>
            </div>
            <div className="cart__item-count">
                <button
                    onClick={onClickMinus} 
                    className="button button--secondary button--circle cart__item-count-minus"
                    disabled={count === 1}
                >
                    <Minus />
                </button>
                <b>{count}</b>
                <button
                    onClick={onClickPlus}
                    className="button button--secondary button--circle cart__item-count-plus"
                >
                    <Plus />
                </button>
            </div>
                <div className="cart__item-price">
                <b>{price*count} ₽</b>
            </div>
            <div onClick={onClickRemove} className="cart__item-remove">
                <div className="button button--secondary button--circle">
                    <Close />
                </div>
            </div>
        </div>
  )
}
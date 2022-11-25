import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { cartItemSelector } from '../../redux/cart/selectors';
import { addPizza } from '../../redux/cart/slice';
import { TCartItem } from '../../redux/cart/types';

const typeNames = [
  'Тонкое',
  'Традиционное'
]
  
type PizzaBlockProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prices: number[];
  sizes: number[];
  types: number[];
}

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, description, imageUrl, prices, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(types[0])
  const [activeSize, setActiveSize] = React.useState(0)

  const dispatch = useDispatch()
  const cartItem = useSelector(cartItemSelector(id, typeNames[activeType], sizes[activeSize]))

  const onClickAdd = () => {
    const pizzaItem: TCartItem = {
      id,
      title,
      imageUrl,
      price: prices[sizes[activeSize]],
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    }
    dispatch(addPizza(pizzaItem))
  }
  
  return (
    <div className="pizza-block">
      <div className="pizza-block__top">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>
        <p className="pizza-block__description">{description}</p>
      </div>

      <div className="pizza-block__bottom">
          <div className="pizza-block__selector">
            <ul>
              {
                types.map(typeId =>
                  <li
                    key={typeId}
                    onClick={() => setActiveType(typeId)}
                    className={activeType === typeId ? "active" : ""}
                  >
                    {typeNames[typeId]}
                  </li>
                )
              }
            </ul>
            <ul>
              {
                sizes.map((size, index) =>
                  <li
                    key={index}
                    onClick={() => setActiveSize(index)}
                    className={activeSize === index ? "active" : ""}
                  >
                    {size} см
                  </li>)
              }
            </ul>
          </div>
        <div className="pizza-block__info">
          <div className="pizza-block__price">{prices[sizes[activeSize]]} ₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {cartItem?.size ? <i>{cartItem.count}</i> : ''}
          </button>
        </div>
        </div>
    </div>
  );
};
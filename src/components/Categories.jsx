import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice';

const categories = [
  'Все',
  'Мясная',
  'Вегетарианская',
  'Гриль',
  'Острая',
  'Закрытая'
]

const Categories = () => {
  const category = useSelector(state => state.filter.categoryId)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {
          categories.map((categoryName, index) => (
            <li key={index}
              onClick={() => dispatch(setCategoryId(index))}
              className={category === index ? 'active' : ''}
            >
              {categoryName}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage, setCategoryId } from '../redux/slices/filterSlice';

const categories = ['Все', 'Мясная', 'Вегетарианская', 'Гриль', 'Острая', 'Закрытая'];

const Categories = () => {
  const category = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onClickCategories = (id) => {
    dispatch(setCategoryId(id));
    dispatch(setActivePage(1));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategories(index)}
            className={category === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

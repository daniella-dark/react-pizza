import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/filter/slice';

type CategoryProps = {
  value: number;
}

const categories: string[] = ['Все', 'Мясная', 'Вегетарианская', 'Гриль', 'Острая', 'Закрытая'];

export const Categories: React.FC<CategoryProps> = ({value}) => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => dispatch(setCategoryId(index))}
            className={value === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

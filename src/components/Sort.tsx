import React from 'react';
import { useDispatch } from 'react-redux'
import ArrowTop from '../assets/img/ArrowTop'
import { setSortType } from '../redux/filter/slice';
import { TSortItem } from '../redux/filter/types';

type SortProps = {
  value: TSortItem
}

export const sortList: TSortItem[] = [
  {name: "сначала популярные", sortProperty: "rating", sortOrder: "asc"},
  {name: "сначала недорогие", sortProperty: "price", sortOrder: "asc"},
  {name: "сначала дорогие", sortProperty: "price", sortOrder: "desc"},
  {name: "по названию (А-Я)", sortProperty: "title", sortOrder: "asc"},
  {name: "по названию (Я-А)", sortProperty: "title", sortOrder: "desc"}
]

export const Sort: React.FC<SortProps> = ({value}) => {
  const dispatch = useDispatch()
  const sortRef = React.useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState(false)

  const clickHandlerSortList = (selectedSortType: TSortItem) => {
    dispatch(setSortType(selectedSortType))
    setOpen(false)
  }

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) setOpen(false)
    }
      document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <ArrowTop/>
        <b>Сортировка:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {
        open && (
        <div className="sort__popup">
          <ul>
              {
                sortList.map((obj, index) =>
                  <li
                    key={index}
                    onClick={() => clickHandlerSortList(obj)}
                    className={value.name === obj.name ? "active" : ""}
                  >
                    {obj.name}
                  </li>)
            }
          </ul>
        </div>
      )}
    </div>
  );
};

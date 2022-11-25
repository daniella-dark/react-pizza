import React from 'react';
import { useDispatch } from 'react-redux';

import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import Icon from '../../assets/img/arrow.svg';
import { setActivePage } from '../../redux/filter/slice';

type PaginationProps = {
  activePage: number;
  pizzasCount: number;
  itemsLimit: number;
}

export const Pagination: React.FC<PaginationProps> = ({ activePage, pizzasCount, itemsLimit }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel={<img width={10} src={Icon} alt="Next" />}
      onPageChange={(e) => dispatch(setActivePage(e.selected + 1))}
      forcePage={activePage - 1}
      pageRangeDisplayed={6}
      pageCount={Math.ceil(pizzasCount / itemsLimit)}
      previousLabel={<img className={styles.prev} width={10} src={Icon} alt="Next" />}
    />
  );
};

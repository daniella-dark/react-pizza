import React from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/slices/filterSlice';

import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import Icon from '../../assets/img/arrow.svg';

const Pagination = ({ activePage, pizzasCount, itemsLimit }) => {
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
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

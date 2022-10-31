import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import Icon from '../../assets/img/arrow.svg';

const Pagination = ({ onChangePage, pizzasCount, itemsLimit }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel={<img width={10} src={Icon} alt="Next" />}
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={Math.ceil(pizzasCount / itemsLimit)}
      previousLabel={<img className={styles.prev} width={10} src={Icon} alt="Next" />}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

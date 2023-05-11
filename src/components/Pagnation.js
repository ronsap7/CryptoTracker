import React from 'react';
import './Pagination.css';

const Pagination = ({ coinsPerPage, totalCoins, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className='pagination__list'>
        <li className='pagination__item'>
          <a href="#!" className='pagination__link' onClick={() => paginate(1)} disabled={currentPage === 1}>
            First
          </a>
        </li>
        {/* <li className='pagination__item'>
          <a href="#!" className='pagination__link' onClick={() => currentPage > 1 && paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </a>
        </li> */}
        {pageNumbers.map(number => (
          <li key={number} className='pagination__item'>
            <a href="#!" onClick={() => paginate(number)} className={`pagination__link ${currentPage === number && 'active'}`}>
              {number}
            </a>
          </li>
        ))}
        {/* <li className='pagination__item'>
          <a href="#!" className='pagination__link' onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
            Next
          </a>
        </li> */}
        <li className='pagination__item'>
          <a href="#!" className='pagination__link' onClick={() => paginate(pageNumbers.length)} disabled={currentPage === pageNumbers.length}>
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

import React, {memo, useCallback} from 'react';
import PropTypes from "prop-types";
import './style.css';

function Pagination({ limit, skip, total, onPageChange }) {
  const totalPages = Math.ceil(total / limit);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const currentPage = Math.floor(skip / limit) + 1;
    const maxVisiblePages = 3;


    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - maxVisiblePages && i <= currentPage + maxVisiblePages)
      ) {
        pageNumbers.push(i);
      } else if (
        i === currentPage - maxVisiblePages - 1 ||
        i === currentPage + maxVisiblePages + 1
      ) {
        pageNumbers.push('...');
      }
    }

    return pageNumbers;
  };

  const handlePageChange = useCallback((newPage) => {
    const newSkip = (newPage - 1) * limit;
    onPageChange(newSkip);
  }, [limit, onPageChange]);

  return (
    <div className="pagination-container">
      {getPageNumbers().map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => (typeof pageNumber === 'number' ? handlePageChange(pageNumber) : null)}
          className={`pagination-button ${typeof pageNumber === 'number' && pageNumber === Math.floor(skip / limit) + 1 ? 'active' : ''}`}
        >
          {typeof pageNumber === 'number' ? pageNumber : <span className="pagination-ellipsis">...</span>}
        </button>


      ))}
    </div>
  );
}

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  skip: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default memo(Pagination);

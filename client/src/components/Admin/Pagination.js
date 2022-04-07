import React from "react";
import "./pagination.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
  dispatch,
}) => {
  const renderPagination = () => {
    if (currentPage === numberOfPages && currentPage === 1) return null;
    if (currentPage === 1) {
      return (
        <ul className="dflex">
          <li>1</li>

          <button onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
            Next
          </button>
        </ul>
      );
    } else if (currentPage !== numberOfPages) {
      return (
        <ul className="dflex">
          <button onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
            Prev
          </button>

          <li>{currentPage}</li>

          <button onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
            Next
          </button>
        </ul>
      );
    } else {
      return (
        <ul className="dflex">
          <button onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
            Prev
          </button>

          <li>{currentPage}</li>
        </ul>
      );
    }
  };
  return <div>{renderPagination()}</div>;
};

export default Pagination;

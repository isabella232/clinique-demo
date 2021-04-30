import React from 'react';

import { connectPagination } from 'react-instantsearch-dom';

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => {
  return new Array(nbPages).fill(null).map((_, index) => {
    const page = index + 1;

    const style = {
      fontWeight: currentRefinement === page ? 'bold' : '',
    };

    return (
      <span key={index} style={style} className="page">
        <a
          style={style}
          className="black"
          href={createURL(page)}
          onClick={event => {
            event.preventDefault();
            refine(page);
          }}
        >
          {page}
        </a>
      </span>
    );
  });
};

const CustomPagination = connectPagination(Pagination);

export default CustomPagination;

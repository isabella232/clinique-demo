import React from 'react';



import CustomPagination from './Pagination';

const ResultsHeader = () => {
  return (
    <div className="result-header-wrapper">
      <div className="results-header-container">
        <h2 className="search-page__headline">Product Results </h2>
        <div className="results-pagination">
          <span className="view-all first">
            <a
              className="black"
              href="?qs=N=&amp;Ne=&amp;Nao=0&amp;Ntt=moisturizer&amp;D=moisturizer&amp;M=host%3Alocalhost%7Cport%3A26335%7Crecs_per_page%3A10000"
              rel="N=&amp;Ne=&amp;Nao=0&amp;Ntt=moisturizer&amp;D=moisturizer&amp;M=host%3Alocalhost%7Cport%3A26335%7Crecs_per_page%3A10000"
            >
              View all
          </a>
          </span>

          <CustomPagination />
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;

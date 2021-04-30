import React from 'react';

import { connectStats } from 'react-instantsearch-dom';

const Stats = ({ processingTimeMS, nbHits, selectedRegion }) => {
  return (
    <div className="stats-container">
      <p className="stats-text">
        {nbHits} results
      </p>
    </div>
  );
};

const ConnectedStats = connectStats(Stats);

export default ConnectedStats;

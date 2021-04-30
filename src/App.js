import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';

import { InstantSearch, Pagination, MenuSelect } from 'react-instantsearch-dom';

import './App.css';
import './Assets/scss/results.scss';
import RegionPicker from './components/RegionPicker';

import CustomSearchBox from './components/SearchBox';
import CustomHits from './components/Hits';
import ResultsHeader from './components/ResultsHeader';
import ConnectedStats from './components/Stats';
import Filters from './components/Filter';

import header from './Assets/img/header.png';
import footer from './Assets/img/footer.png';

const searchClient = algoliasearch(
  '01894EZDTX',
  'be54b756dc1d93f0b852b3cd4a823ad4'
);

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('clinique-products-us');

  return (
    <div>
      <img src={header} alt="header" className="header-img" />
      <div className="container">
        <InstantSearch searchClient={searchClient} indexName={selectedRegion}>
          <div className="search-panel">
            <div className="search-panel__results">
              <CustomSearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <div className="header-filter">
                <div className="filter-stat-wrapper">
                  <Filters />
                  <ConnectedStats selectedRegion={selectedRegion} />
                </div>
                <RegionPicker
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                />
              </div>
              {/* <ResultsHeader /> */}
              <CustomHits selectedRegion={selectedRegion} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
      <img src={footer} alt="footer" className="footer-img" />
    </div>
  );
};

export default App;

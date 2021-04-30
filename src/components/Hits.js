import React from 'react';
import { connectHits } from 'react-instantsearch-dom';

function averageReviews(reviews) {
  if (reviews) {
    return (
      <div>
        {Array.from({ length: 5 }, (_value, index) => {
          const isFilled = reviews.average_rating >= index + 1;

          return (
            <svg
              key={index}
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill={isFilled ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          );
        })}
      </div>
    );
  }
}

const Hits = ({ hits, selectedRegion }) => {
  const baseNames = [
    { name: 'us', url: 'https://www.clinique.com' },
    { name: 'fr', url: 'https://www.fr.clinique.com' },
    { name: 'tr', url: 'https://www.clinique.com.tr' },
    { name: 'cn-zhhans', url: 'https://www.clinique.com.cn' },
    { name: 'jp-ja', url: 'https://www.clinique.jp' },
    { name: 'kr-ko', url: 'https://www.cliniquekorea.co.kr' },
    { name: 'ru', url: 'https://www.clinique.ru' },
    { name: 'il-he', url: 'https://www.clinique.co.il' },
  ];

  const currentRegionBaseName = selectedRegion
    .split('-')
    .slice(2)
    .join('-');

  function matchBaseName(region) {
    return region.name === currentRegionBaseName;
  }

  const urlBaseName = baseNames.find(matchBaseName).url;
  console.log(urlBaseName);

  return (
    <ul className="list-items">
      {hits.map(hit => {
        return (
          <li key={hit.objectID} className="list-item">
            <div className="list-item-wrapper">
              <div className="image-wrapper">
                <img
                  src={`${urlBaseName}${hit.skus.items[0].media.medium[0].src}`}
                />
                {/* <img src="https://images.unsplash.com/photo-1587313512268-a3b47aa30166?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" /> */}
              </div>
              <div className="info-wrapper">
                <div className="title">
                  <h2>{hit.display_name}</h2>
                </div>
                {/* <div className="review-wrapper">
                  <div className="stars">
                    {averageReviews(hit.reviews)}{' '}
                    <span>
                      (
                      {hit.reviews
                        ? hit.reviews.number_of_reviews + ' REVIEWS'
                        : ''}
                      )
                    </span>
                  </div>
                </div> */}
                <div className="price-wrapper">
                  <p className="price">
                    ${hit.skus.items[0].prices[0].include_tax.price}
                  </p>
                  {/* <p className="qty">{hit.short_description}</p> */}
                </div>
                {/* <div className="btn-wrapper">
                  <div className="btn-1">
                    <p>QTY: 1</p>
                  </div>
                  <div className="btn-2">
                    <p>ADD TO BAG</p>
                  </div>
                </div> */}
                {/* <div className="link-wrapper">
                  <a>FULL DETAILS</a>
                  <a>ADD TO WISHLIST</a>
                </div> */}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const CustomHits = connectHits(Hits);

export default CustomHits;

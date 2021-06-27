import React, { useState } from 'react';
import ReviewComp from './reviewComp.jsx';
import ReviewSort from './reviewSort.jsx';



const FilterCard = (props) => (
  <div className='border m-1' style={{ display: 'inline-block' }}>
    <div style={{ display: 'inline-block', marginRight: '10px' }}>{props.name + ' Stars'}</div>
    <div style={{ display: 'inline-block', width: '10px' }}>
      <button type="button" class="review-filter-card-remove btn-close" aria-label="Close" name={props.name} onClick={props.onClick} style={{ width: '2px', height: '2px', position: 'relative', top: '-10px' }}></button>
    </div>
  </div>
);

const sortBy = (type, data) => {
  if (type === 'relevance') {
    data.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
    data.map((item, index) => { item.weight = index; });
    data.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    data.map((item, index) => { item.weight = index + item.weight; });
    data.sort((a, b) => {
      return a.weight - b.weight;
    });
  }
  if (type === 'helpful') {
    data.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
  }
  if (type === 'latest') {
    data.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
  }
};

const ReviewList = (props) => {
  const count = props.data.results.length;

  const [numOfReview, setNumOfReview] = useState(2);

  // filter data
  const filterData = props.data.results
    .filter(result => {
      if (props.filters.length > 0) {
        return props.filters.includes(result.rating + '');
      }
      return true;
    });

  // sort data
  sortBy(props.sort, filterData);

  const moreReviews = () => {
    setNumOfReview(numOfReview + 2);
  };


  return (
    <div className='review-list'>
      <ReviewSort count={count} onChange={props.updateSortType} />
      {props.filters.length > 0 && <div>Filtered by: {props.filters.map(filter => <FilterCard name={filter} onClick={props.removeStarFilter} />)}</div>}
      <div className='overflow-auto review-list-comps' style={{ maxHeight: '800px' }}>
        {filterData
          .map((result, index) => {
            if (index < numOfReview) {
              return (<ReviewComp result={result} />);
            }
          })}
      </div>
      <button className='btn btn-primary m-3 ' id="review-addreview-btn" onClick={props.addReview}>ADD A REVIEW</button>
      {numOfReview < filterData.length && <button className='btn btn-primary m-3 ' id='review-morereview-btn' onClick={moreReviews}>MORE REVIEWS</button>}
    </div >
  );
};

export default ReviewList;
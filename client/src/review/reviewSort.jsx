import React from 'react';

const sortTypes = ['relevance', 'helpful', 'latest'];

const ReviewSort = (props) => (
  <div>{props.count + ' reviews, sorted by '}
    <select id='review-sort-select' onChange={props.onChange}>
      {sortTypes.map(type => <option value={type}>{type}</option>)}
    </select>
  </div>
);

export default ReviewSort;
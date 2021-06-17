import React from 'react';

const sortTypes = ['relevance', 'helpful', 'newest'];

const ReviewSort = (props) => (
  <div>{props.count + ' reviews, sorted by '}
    <select>
      {sortTypes.map(type => <option value={type}>{type}</option>)}
    </select>
  </div>
);

export default ReviewSort;
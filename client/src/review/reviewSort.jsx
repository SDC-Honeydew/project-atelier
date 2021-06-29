import React from 'react';

const sortTypes = ['relevance', 'helpful', 'latest'];

const ReviewSort = (props) => (
  <div>{props.count + ' reviews, sorted by '}
    <select id='review-sort-select' onChange={props.onChange}>
      {sortTypes.map((type, index) => {
        if (type === 'relevance') {
          return (<option value={type} selected='selected' key={`option_${index}`}>{type}</option>);
        }
        return (<option value={type} key={`option_${index}`}>{type}</option>);
      })}
    </select>
  </div>
);

export default ReviewSort;
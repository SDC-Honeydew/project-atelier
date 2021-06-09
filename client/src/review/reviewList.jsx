import React from 'react';
import ReviewComp from './reviewComp.jsx';
import ReviewSort from './reviewSort.jsx';

const ReviewList = (props) => (
  <div className='review-list'>
    <ReviewSort count={props.data.count} />
    {props.data.results.map(result => <ReviewComp result={result} />)}
    <div>
      <button className='btn btn-primary mr-2' id='more-review'>MORE REVIEWS</button>
      <button className='btn btn-primary mr-2' id='add-review'>ADD A REVIEW</button>
    </div>
  </div>
);

export default ReviewList;
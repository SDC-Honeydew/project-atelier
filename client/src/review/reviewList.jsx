import React from 'react';
import ReviewComp from './reviewComp.jsx';

const ReviewList = (props) => (
  <div className='review-list'>
    {props.data.results.map(result => <ReviewComp result={result} />)}
    <div>
      <button className='btn btn-primary' id='more-review'>MORE REVIEWS</button>
      <button className='btn btn-primary' id='add-review'>ADD A REVIEW</button>
    </div>
  </div>
);

export default ReviewList;
import React from 'react';
import { StarRating, StarRatingInput } from './starRating.jsx';
import ProgressBar from './ProgressBar.jsx';



const RatingBreakdown = (props) => (
  <div>
    <StarRating rating={2.5} />
    <StarRatingInput />
    <p>4.1 average based on 200 reviews</p>
    <ProgressBar text='5★' />
    <ProgressBar text='4★' />
    <ProgressBar text='3★' />
    <ProgressBar text='2★' />
    <ProgressBar text='1★' />
  </div>
)

export default RatingBreakdown;

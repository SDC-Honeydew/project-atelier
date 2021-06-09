import React from 'react';
import { StarRating, StarRatingInput } from './starRating.jsx';
import ProgressBar from './progressBar.jsx';



const RatingBreakdown = (props) => (
  <div>
    <StarRating rating={2.5} />
    <p>4.1 average based on 200 reviews</p>
    <ProgressBar text='5 Star' percentage={50} />
    <ProgressBar text='4 Star' percentage={20} />
    <ProgressBar text='3 Star' percentage={10} />
    <ProgressBar text='2 Star' percentage={10} />
    <ProgressBar text='1 Star' percentage={10} />
  </div>
);

export default RatingBreakdown;

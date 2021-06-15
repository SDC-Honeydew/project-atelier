import React from 'react';
import { StarRating, StarRatingInput } from './starRating.jsx';
import ProgressBar from './progressBar.jsx';



const RatingBreakdown = (props) => {
  const count = props.data.count;
  const recommend = props.data.results.reduce((acc, curr) => {
    if (curr.recommend) {
      acc++;
    }
    return acc;
  }, 0) / count;

  const avgRating = props.data.results.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0) / count;

  const ratingDistribution = props.data.results.reduce((acc, curr) => {
    let rating = Math.round(curr.rating);
    if (rating > 5) { rating = 5; }
    if (rating < 0) { rating = 0; }
    acc[rating - 1] = acc[rating - 1] + 1;
    return acc;
  }, new Array(5).fill(0));

  return (
    <div style={{ width: '400px', marginLeft: '50px' }}>
      <div className='review-grid-rating-container'>
        <div className='review-rating-digit-area'>
          <h1>{avgRating}</h1>
        </div>
        <div className='review-rating-star-area'>
          <StarRating rating={avgRating} />
        </div>
      </div>
      <p>{recommend * 100}% recommend this product</p>
      <ProgressBar text='5 Star' percentage={ratingDistribution[4] / count * 100} onClick={props.addStarFilter} />
      <ProgressBar text='4 Star' percentage={ratingDistribution[3] / count * 100} onClick={props.addStarFilter} />
      <ProgressBar text='3 Star' percentage={ratingDistribution[2] / count * 100} onClick={props.addStarFilter} />
      <ProgressBar text='2 Star' percentage={ratingDistribution[1] / count * 100} onClick={props.addStarFilter} />
      <ProgressBar text='1 Star' percentage={ratingDistribution[0] / count * 100} onClick={props.addStarFilter} />
    </div>
  );
};

export default RatingBreakdown;

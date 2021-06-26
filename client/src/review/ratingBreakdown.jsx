import React from 'react';
import StarRating from './starRating.jsx';
import ProgressBar from './progressBar.jsx';



const RatingBreakdown = (props) => {
  const count = props.data.results.length;
  const recommend = Math.round(props.data.results.reduce((acc, curr) => {
    if (curr.recommend) {
      acc++;
    }
    return acc;
  }, 0) / count * 100);

  const avgRating = Math.round(props.data.results.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0) / count * 10) / 10.0;

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
      <p>{recommend}% recommend this product</p>
      <ProgressBar text='5 Star' percentage={Math.round(ratingDistribution[4] / count * 100)} onClick={props.toggleStarFilter} />
      <ProgressBar text='4 Star' percentage={Math.round(ratingDistribution[3] / count * 100)} onClick={props.toggleStarFilter} />
      <ProgressBar text='3 Star' percentage={Math.round(ratingDistribution[2] / count * 100)} onClick={props.toggleStarFilter} />
      <ProgressBar text='2 Star' percentage={Math.round(ratingDistribution[1] / count * 100)} onClick={props.toggleStarFilter} />
      <ProgressBar text='1 Star' percentage={Math.round(ratingDistribution[0] / count * 100)} onClick={props.toggleStarFilter} />
    </div>
  );
};

export default RatingBreakdown;

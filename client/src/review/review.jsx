import React from 'react';
import ReviewList from './reviewList.jsx';
import RatingBreakdown from './ratingBreakdown.jsx';
import reviewData from '../../../sampleData.json';
import $ from 'jquery';
class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  getProductData(id) {

  }

  render() {
    return (
      <div id="review">
        This will be the review component!
        <ReviewList data={reviewData} />
        <RatingBreakdown />
      </div>
    )
  }
}

export default Review;
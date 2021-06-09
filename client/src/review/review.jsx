import React from 'react';
import ReviewList from './reviewList.jsx';
import RatingBreakdown from './ratingBreakdown.jsx';
import ReviewSort from './reviewSort.jsx';
import reviewData from '../../../reviewSampleData.json';
import ProductBreakdown from './productBreakdown.jsx';
import $ from 'jquery';
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: reviewData };
    this.getReviewsData();
  }

  getReviewsData(id) {
    $.ajax({
      method: 'GET',
      url: '/review',
      data: { id: 22122 },
      dataType: 'json',
      success: (data) => {
        this.setState({ data });
        console.log(this.state.data);
        console.log(reviewData);
      }
    });
  }

  render() {
    return (
      <div id="review">
        <div class='review-grid-container'>
          <div class='review-header-area'>Rating & Reviews</div>
          <div class='review-list-area'><ReviewList data={this.state.data} /></div>
          <div class='review-ratingbreakdown-area'><RatingBreakdown data={this.state.data} /></div>
          <div class='review-productbreakdown-area'><ProductBreakdown /></div>
        </div>
      </div>
    );
  }
}

export default Review;
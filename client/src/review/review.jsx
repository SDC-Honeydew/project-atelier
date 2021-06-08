import React from 'react';
import ReviewList from './reviewList.jsx';
import RatingBreakdown from './ratingBreakdown.jsx';
import reviewData from '../../../reviewSampleData.json';
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
        This will be the review component!
        <ReviewList data={this.state.data} />
        <RatingBreakdown />
      </div>
    );
  }
}

export default Review;
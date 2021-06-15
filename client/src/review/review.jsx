import React from 'react';
import ReviewList from './reviewList.jsx';
import RatingBreakdown from './ratingBreakdown.jsx';
import reviewData from '../../../reviewSampleData.json';
import ProductBreakdown from './productBreakdown.jsx';
import $ from 'jquery';
import { Link } from 'react-router-dom';
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
      data: { id: this.props.id },
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
        <div className='review-grid-container'>
          <div className='review-header-area'>Rating & Reviews</div>
          <div className='review-list-area'><ReviewList data={this.state.data} /></div>
          <div className='review-ratingbreakdown-area'><RatingBreakdown data={this.state.data} /></div>
          <div className='review-productbreakdown-area'><ProductBreakdown /></div>
          <Link to='/?product=22122' >clicko</Link>

        </div>
      </div>
    );
  }
}

export default Review;
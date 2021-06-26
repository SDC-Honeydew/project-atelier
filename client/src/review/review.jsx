import React from 'react';
import ReviewList from './reviewList.jsx';
import RatingBreakdown from './ratingBreakdown.jsx';
import reviewData from '../../../reviewSampleData.json';
import ProductBreakdown from './productBreakdown.jsx';
import AddReviewPopup from './addReviewPopup.jsx';
import $ from 'jquery';
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: reviewData,
      sort: 'relevance',
      filters: [],
      popup: false,
    };
    if (props.data !== undefined) {
      this.setState({ data: props.data });
    }
    if (props.id !== undefined) {
      this.getReviewsData(props.id);
    }
    this.toggleStarFilter = this.toggleStarFilter.bind(this);
    this.updateSortType = this.updateSortType.bind(this);
    this.togglePopup = this.togglePopup.bind(this);

  }

  toggleStarFilter(e) {
    let filters = this.state.filters;
    let newFilter = e.target.name.split(' ')[0];
    if (!filters.includes(newFilter)) {
      filters.push(newFilter);
      this.setState({ filters });
    } else {
      let index = filters.indexOf(newFilter);
      filters.shift(index, index + 1);
      this.setState({ filters });
    }
  }

  updateSortType(e) {
    this.setState({ sort: e.target.value });
  }

  getReviewsData(id) {
    $.ajax({
      method: 'GET',
      url: '/reviews',
      data: { id: this.props.id },
      dataType: 'json',
      success: (data) => {
        this.setState({ data });
        console.log(data);
      }
    });
  }

  togglePopup() {
    this.setState({ popup: !this.state.popup });
  }

  render() {
    return (
      <div id="review">
        <div className='review-grid-container'>
          <div className='review-header-area'>Rating & Reviews</div>
          <div className='review-list-area'>
            <ReviewList data={this.state.data.reviews} filters={this.state.filters} removeStarFilter={this.toggleStarFilter} sort={this.state.sort} updateSortType={this.updateSortType} addReview={this.togglePopup} />
          </div>
          <div className='review-ratingbreakdown-area'>
            <RatingBreakdown data={this.state.data.reviews} toggleStarFilter={this.toggleStarFilter} />
          </div>
          <div className='review-productbreakdown-area'>
            <ProductBreakdown data={this.state.data.meta} />
          </div>
        </div>
        <AddReviewPopup trigger={this.state.popup} close={this.togglePopup} id={this.props.id} />
      </div >
    );
  }
}

export default Review;
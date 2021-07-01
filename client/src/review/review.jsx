import React from 'react';
import ReviewList from './reviewList.jsx';
import RatingBreakdown from './ratingBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';
import AddReviewPopup from './addReviewPopup.jsx';
import $ from 'jquery';
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        'reviews': {
          'product': '2',
          'page': 0,
          'count': 5,
          'results': [
          ]
        },
        'meta': {
          'product_id': '2',
          'ratings': {
            '5': 1,
            '3': 1,
            '4': 3
          },
          'recommended': {
            '0': 5
          },
          'characteristics': {
            'Size': {
              'id': 14,
              'value': 4.0000
            },
            'Width': {
              'id': 15,
              'value': 3.5000
            },
            'Comfort': {
              'id': 16,
              'value': 4.0000
            }
          }
        }
      },
      sort: 'relevance',
      filters: [],
      popup: false,
      userData: []
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
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'regenerator-runtime';
import '../client/src/app.css';
import reviewData from '../reviewSampleData.json';

import { StarRatingInput, StarRating } from '../client/src/review/starRating.jsx';
import ReviewComp from '../client/src/review/reviewComp.jsx';
import ReviewList from '../client/src/review/reviewList.jsx';
import ReviewSort from '../client/src/review/reviewSort.jsx';
import Review from '../client/src/review/review.jsx';
import RatingBreakdown from '../client/src/review/ratingBreakdown.jsx';
configure({ adapter: new Adapter() });

// Star Rating

//Each product has an average rating based on its reviews. The average rating of the product will be represented by an array of solid or outlined stars, where the number of solid stars represents the review score. A total of 5 stars should always appear. The number of stars filled in should correspond to the average score.

//The visual for rating should be representative of up to a quarter of a review point. For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

afterEach(cleanup);

describe('StarRating testing', () => {
  test('Can render 0 star', () => {
    var rating = 0;
    render(<StarRating rating={rating} />);
    const starInner = document.getElementsByClassName('review-stars-inner');
    expect(starInner[0]).toHaveStyle(`width: ${rating}%`);
  });

  test('Can render 4 star', () => {
    var rating = 4;
    render(<StarRating rating={rating} />);
    const starInner = document.getElementsByClassName('review-stars-inner');
    expect(starInner[0]).toHaveStyle(`width: ${rating / 5 * 100}%`);
  });

  test('Can render 4.65 star as 4.75', () => {
    var rating = 4.65;
    var renderRating = 4.75;
    render(<StarRating rating={rating} />);
    const starInner = document.getElementsByClassName('review-stars-inner');
    expect(starInner[0]).toHaveStyle(`width: ${renderRating / 5 * 100}%`);
  });

});

// Individual review component
// Review summary should be one sentence summary, capped at 60 characters(done)

// Review Body should be a free-form multimedia input where the text and image can be submitted (done)
// text should be between 50 and 1000 characters(done)
// user can only submit up to 5 images along with a single review(done)

// By default, first 250 characters of review should display. If the review is longer than 250, should have a "show more" appear. Upon click the link,review tile should expand and the rest of review should display(done)

// Recommend icon is displayed properly(done)
// If the reviewer recommends buying theproduct, the text “I recommend this product” and a checkmark icon willdisplay below the review.  Ifthe reviewer does not recommend the product, nothingwill display here.(done)

// Reviewer name(done)
// review username will appear for each tile.
// if user's email is associated with a sale, verified purchaser will appear

// Internal sales team has ability to respond to any reviews writte with Response from seller

// User can provide feedback by click yes or no on review(done)



describe('ReviewComp testing', () => {

  var testResult = {
    'review_id': 5,
    'rating': 3.55,
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt. Morbi tristique senectus et netus et malesuada fames ac. Non blandit massa enim nec. In mollis nunc sed id. Et ultrices neque ornare aenean euismod elementum. Mattis nunc sed blandit libero volutpat. Morbi leo urna molestie at. Nibh nisl condimentum id venenatis. Habitant morbi tristique senectus et. Congue nisi vitae suscipit tellus mauris. Neque aliquam vestibulum morbi',
    'recommend': false,
    'response': null,
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt. Morbi tristique senectus et netus et malesuada fames ac. Non blandit massa enim nec. In mollis nunc sed id. Et ultrices neque ornare aenean euismod elementum. Mattis nunc sed blandit libero volutpat. Morbi leo urna molestie at. Nibh nisl condimentum id venenatis. Habitant morbi tristique senectus et. Congue nisi vitae suscipit tellus mauris. Neque aliquam vestibulum morbiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt. Morbi tristique senectus et netus et malesuada fames ac. Non blandit massa enim nec. In mollis nunc sed id. Et ultrices neque ornare aenean euismod elementum. Mattis nunc sed blandit libero volutpat. Morbi leo urna molestie at. Nibh nisl condimentum id venenatis. Habitant morbi tristique senectus et. Congue nisi vitae suscipit tellus mauris. Neque aliquam vestibulum morbi',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [
      {
        'id': 1,
        'url': 'https://img.abercrombie.com/is/image/anf/KIC_124-1829-0082-210_prod1?policy=product-medium'
      },
      {
        'id': 2,
        'url': 'https://img.abercrombie.com/is/image/anf/KIC_124-1829-0082-210_prod1?policy=product-large'
      }
    ]
  };

  let wrapper = shallow(<ReviewComp result={testResult} />);

  test('if the summary exceeds 60 characters, it will be capped to 60', () => {
    const summary = wrapper.find('.review-card-title-area');
    expect(summary.text()).toBe(testResult.summary.substring(0, 60));
  });

  test('can render image properly', () => {
    const images = wrapper.find('img');
    expect(images).toHaveLength(2);
    expect(images.at(0).prop('src')).toBe(testResult.photos[0].url);
    expect(images.at(1).prop('src')).toBe(testResult.photos[1].url);
  });

  test('if the body exceeds 250 characters, it will be capped to 250.', () => {
    const body = wrapper.find('.review-body');
    expect(body.text()).toBe(testResult.body.substring(0, 250) + '...');
  });

  test('If the body exceeds 250 characters, there is show-more button', () => {
    const buttons = wrapper.find('a');
    expect(buttons.at(0).text()).toBe('show more...');
  });

  test('Click show more button, all the text will show up', () => {
    const showMoreBtn = wrapper.find('a').at(0);
    showMoreBtn.simulate('click');
    const body = wrapper.find('.review-body');
    expect(body.text()).toBe(testResult.body);
  });

  test('Click show more button, all the text will show up', () => {
    const showMoreBtn = wrapper.find('a').at(0);
    showMoreBtn.simulate('click');
    const body = wrapper.find('.review-body');
    expect(body.text()).toBe(testResult.body);
  });

  test('If recommend is false, there is no recommendation icon, otherwise the recommendation icon should render properly', () => {
    render(<ReviewComp result={testResult} />);
    expect(screen.queryByText('✅ I recommend this item')).toBeNull();
    testResult.recommend = true;
    render(<ReviewComp result={testResult} />);
    expect(screen.queryByText('✅ I recommend this item')).toBeInTheDocument();
  });

  test('user name and date can render properly', () => {
    const userInfo = wrapper.find('.review-card-user-area');
    expect(userInfo.text()).toContain(testResult.reviewer_name);
    expect(userInfo.text()).toContain(testResult.date.split('T')[0]);
  });

  test('user can provide feedback by clicking yes', () => {
    const yes = wrapper.find('.review-card-response-area').at(0);
    yes.simulate('click');
    setTimeout(() => expect(yes.text()).toBe(`Yes(${testResult.helpfulness + 1})`));
  });
});


// Review List

// The list can display all the reviews that have been submitted, check total number of reviews

// The list should display 2 tiles at a time

// If there are more reviews to display, the button should appear

// If there are no more reviews to display, the button should no long appear

// Click more reviews button should cause up to 2 additional reviews to appear.



describe('ReviewList testing', () => {

  test('The list can display all the reviews that have been submitted', () => {
    let filters = [];
    let wrapper = shallow(<ReviewList data={reviewData.reviews} filters={filters} />);
    let moreReviewBtn = wrapper.find('.btn').at(1);
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('.btn').at(1);
    moreReviewBtn.simulate('click');
    const comps = wrapper.find('ReviewComp');
    expect(comps).toHaveLength(5);
  });

  test('The list should display 2 tiles at a time', () => {
    let filters = [];
    let wrapper = shallow(<ReviewList data={reviewData.reviews} filters={filters} />);
    let comps = wrapper.find('ReviewComp');
    expect(comps).toHaveLength(2);
    let moreReviewBtn = wrapper.find('.btn').at(1);
    moreReviewBtn.simulate('click');
    comps = wrapper.find('ReviewComp');
    expect(comps).toHaveLength(4);
  });

  test('If there are more reviews to display, the button should appear, If there are no more reviews to display, the button should no long appear ', () => {
    let filters = [];
    let wrapper = shallow(<ReviewList data={reviewData.reviews} filters={filters} />);
    let comps = wrapper.find('ReviewComp');
    let moreReviewBtn = wrapper.find('.btn').at(1);
    expect(moreReviewBtn.text()).toContain('MORE REVIEWS');
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('.btn').at(1);
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('.btn').at(1);
    expect(moreReviewBtn).toHaveLength(0);
  });

});

// Sort options

// Sort options should have Helpful, latest, Relevance (done)

// Can sort helpful properly (done)

// Can sort Newest properly (done)

// Can sort Relevance properly (done)

// By default, the option should be in order of relevance (done)

describe('Sort options testings', () => {
  test('Sort options should have Helpful, latest, Relevance, By default, the option should be in order of relevance', () => {
    let filters = [];
    let wrapper = shallow(<ReviewSort onChange={() => { }} />);
    let reviewSort = wrapper.find('option');
    expect(reviewSort).toHaveLength(3);
    expect(reviewSort.at(0).text()).toBe('relevance');
    expect(reviewSort.at(1).text()).toBe('helpful');
    expect(reviewSort.at(2).text()).toBe('latest');
  });

  test('Sort options should have Helpful, latest, Relevance, By default, the option should be in order of relevance', () => {
    let filters = [];
    let wrapper = shallow(<ReviewSort onChange={() => { }} />);
    let select = wrapper.find('select');
    expect(select.find('option').at(0).text()).toBe('relevance');
    expect(select.find('option').at(0).props().selected).toBe('selected');
  });

  test('Can sort helpful properly', () => {
    let filters = [];
    const wrapper = mount(<Review data={reviewData} />);
    let sortedReviews = reviewData.reviews.results.slice();
    sortedReviews.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    let select = wrapper.find('#review-sort-select');
    select.find('option').at(0).instance().selected = false;
    select.find('option').at(1).instance().selected = true;
    select.find('option').at(2).instance().selected = false;
    select.simulate('change');
    let moreReviewBtn = wrapper.find('#review-morereview-btn');
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    let reviewBodies = wrapper.find('.review-body');
    expect(reviewBodies.at(0).text()).toBe(sortedReviews[0].body);
    expect(reviewBodies.at(1).text()).toBe(sortedReviews[1].body);
    expect(reviewBodies.at(2).text()).toBe(sortedReviews[2].body);
    expect(reviewBodies.at(3).text()).toBe(sortedReviews[3].body);
    expect(reviewBodies.at(4).text()).toBe(sortedReviews[4].body);
  });


  test('Can sort latest properly', () => {
    let filters = [];
    const wrapper = mount(<Review data={reviewData} />);
    let sortedReviews = reviewData.reviews.results.slice();
    sortedReviews.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
    let select = wrapper.find('#review-sort-select');
    select.find('option').at(0).instance().selected = false;
    select.find('option').at(1).instance().selected = false;
    select.find('option').at(2).instance().selected = true;
    select.simulate('change');
    let moreReviewBtn = wrapper.find('#review-morereview-btn');
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    let reviewBodies = wrapper.find('.review-body');
    expect(reviewBodies.at(0).text()).toBe(sortedReviews[0].body);
    expect(reviewBodies.at(1).text()).toBe(sortedReviews[1].body);
    expect(reviewBodies.at(2).text()).toBe(sortedReviews[2].body);
    expect(reviewBodies.at(3).text()).toBe(sortedReviews[3].body);
    expect(reviewBodies.at(4).text()).toBe(sortedReviews[4].body);
  });

  test('Can sort latest properly', () => {
    let filters = [];
    const wrapper = mount(<Review data={reviewData} />);
    let sortedReviews = reviewData.reviews.results.slice();
    sortedReviews.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
    sortedReviews.map((item, index) => { item.weight = index; });
    sortedReviews.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    sortedReviews.map((item, index) => { item.weight = index + item.weight; });
    sortedReviews.sort((a, b) => {
      return a.weight - b.weight;
    });
    let select = wrapper.find('#review-sort-select');
    select.find('option').at(0).instance().selected = true;
    select.find('option').at(1).instance().selected = false;
    select.find('option').at(2).instance().selected = false;
    select.simulate('change');
    let moreReviewBtn = wrapper.find('#review-morereview-btn');
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    moreReviewBtn.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    let reviewBodies = wrapper.find('.review-body');
    expect(reviewBodies.at(0).text()).toBe(sortedReviews[0].body);
    expect(reviewBodies.at(1).text()).toBe(sortedReviews[1].body);
    expect(reviewBodies.at(2).text()).toBe(sortedReviews[2].body);
    expect(reviewBodies.at(3).text()).toBe(sortedReviews[3].body);
    expect(reviewBodies.at(4).text()).toBe(sortedReviews[4].body);
  });

});

// ratingbreakdown

// The average rating of the product should displayed

// Breakdown is displayed properly for the product

// Clicking on the breakdown for a star count will filterthe reviews list so that only reviewsof that rating display

//The filters will be additive.

//The filters will be toggled on and off with each click

// Percentage of reviews that recommend the product is displayed properly


describe('rating breakdown testing', () => {
  let sortedReviews = reviewData.reviews.results.slice();
  sortedReviews.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
  sortedReviews.map((item, index) => { item.weight = index; });
  sortedReviews.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });
  sortedReviews.map((item, index) => { item.weight = index + item.weight; });
  sortedReviews.sort((a, b) => {
    return a.weight - b.weight;
  });

  let avgRating = reviewData.reviews.results.reduce((acc, review) => {
    return acc + review.rating;
  }, 0) / reviewData.reviews.count;
  test('The average rating of the product should displayed', () => {
    let wrapper = mount(<Review data={reviewData} />);
    let avgRatingRender = wrapper.find('.review-rating-digit-area');
    expect(avgRatingRender.text()).toBe(avgRating + '');
  });

  test('Clicking on the breakdown for a star count will filterthe reviews list so that only reviewsof that rating display---5 star', () => {
    let wrapper = mount(<Review data={reviewData} />);
    let reviewBodyFiveStar = sortedReviews.filter(review => review.rating === 5);
    const fiveStar = wrapper.find('.review-rating-text').find('a').at(0);
    fiveStar.simulate('click');
    let reviewComps = wrapper.find('.review-body');
    expect(reviewComps.length).toBe(reviewBodyFiveStar.length);
    reviewBodyFiveStar.map((review, index) => {
      expect(reviewComps.at(index).text()).toBe(review.body);
    });
  });

  test('Clicking on the breakdown for a star count will filterthe reviews list so that only reviewsof that rating display and the filters will be additive.---4 star, 4 and 5 stars', () => {
    let wrapper = mount(<Review data={reviewData} />);
    let reviewBodyFourStar = sortedReviews.filter(review => review.rating === 4);
    const fourStar = wrapper.find('.review-rating-text').find('a').at(1);
    fourStar.simulate('click');
    let moreReviewBtn = wrapper.find('#review-morereview-btn');
    while (moreReviewBtn.get(0)) {
      moreReviewBtn.simulate('click');
      moreReviewBtn = wrapper.find('#review-morereview-btn');
    }
    let reviewComps = wrapper.find('.review-body');
    expect(reviewComps.length).toBe(reviewBodyFourStar.length);
    reviewBodyFourStar.map((review, index) => {
      expect(reviewComps.at(index).text()).toBe(review.body);
    });
    const fiveStar = wrapper.find('.review-rating-text').find('a').at(0);
    fiveStar.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    while (moreReviewBtn.get(0)) {
      moreReviewBtn.simulate('click');
      moreReviewBtn = wrapper.find('#review-morereview-btn');
    }
    reviewComps = wrapper.find('.review-body');
    let reviewBodyFourFiveStars = sortedReviews.filter(review => review.rating === 4 || review.rating === 5);
    expect(reviewComps.length).toBe(reviewBodyFourFiveStars.length);
    reviewBodyFourFiveStars.map((review, index) => {
      expect(reviewComps.at(index).text()).toBe(review.body);
    });
  });

  test('The filters will be toggled on and off with each click', () => {
    // filter by 4 star
    let wrapper = mount(<Review data={reviewData} />);
    let reviewBodyFourStar = sortedReviews.filter(review => review.rating === 4);
    const fourStar = wrapper.find('.review-rating-text').find('a').at(1);
    fourStar.simulate('click');
    let moreReviewBtn = wrapper.find('#review-morereview-btn');
    while (moreReviewBtn.get(0)) {
      moreReviewBtn.simulate('click');
      moreReviewBtn = wrapper.find('#review-morereview-btn');
    }
    let reviewComps = wrapper.find('.review-body');
    expect(reviewComps.length).toBe(reviewBodyFourStar.length);
    reviewBodyFourStar.map((review, index) => {
      expect(reviewComps.at(index).text()).toBe(review.body);
    });
    // remove 4 star filter by click four star again
    fourStar.simulate('click');
    moreReviewBtn = wrapper.find('#review-morereview-btn');
    while (moreReviewBtn.get(0)) {
      moreReviewBtn.simulate('click');
      moreReviewBtn = wrapper.find('#review-morereview-btn');
    }
    reviewComps = wrapper.find('.review-body');
    expect(reviewComps.length).toBe(sortedReviews.length);
    sortedReviews.map((review, index) => {
      expect(reviewComps.at(index).text()).toBe(review.body);
    });
  });

  test('Percentage of reviews that recommend the product is displayed properly', () => {
    const ratingDistribution = sortedReviews.reduce((acc, curr) => {

      let rating = Math.round(curr.rating);
      if (rating > 5) { rating = 5; }
      if (rating < 0) { rating = 0; }
      acc[rating - 1] = acc[rating - 1] + 1;
      return acc;
    }, new Array(5).fill(0));
    let percentages = ratingDistribution.map(rating => rating / sortedReviews.length * 100);
    let wrapper = mount(<Review data={reviewData} />);
    let ratingPercentages = wrapper.find('.review-rating-percentage');
    percentages.map((percentage, index) => {
      expect(ratingPercentages.at(percentages.length - index - 1).text()).toBe(percentage + '%');
    });
  });
});
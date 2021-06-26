// import { render, screen, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from '../client/src/app.jsx';
// import React from 'react';
// import reviewData from '../reviewSampleData.json';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import 'regenerator-runtime';
// import '../client/src/app.css';

// import { StarRatingInput, StarRating } from '../client/src/review/starRating.jsx';
// import ReviewComp from '../client/src/review/reviewComp.jsx';
// configure({ adapter: new Adapter() });

// // Star Rating

// //Each product has an average rating based on its reviews. The average rating of the product will be represented by an array of solid or outlined stars, where the number of solid stars represents the review score. A total of 5 stars should always appear. The number of stars filled in should correspond to the average score.

// //The visual for rating should be representative of up to a quarter of a review point. For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

// afterEach(cleanup);

// describe('StarRating testing', () => {
//   test('Can render 0 star', () => {
//     var rating = 0;
//     render(<StarRating rating={rating} />);
//     const starInner = document.getElementsByClassName('review-stars-inner');
//     expect(starInner[0]).toHaveStyle(`width: ${rating}%`);
//   });

//   test('Can render 4 star', () => {
//     var rating = 4;
//     render(<StarRating rating={rating} />);
//     const starInner = document.getElementsByClassName('review-stars-inner');
//     expect(starInner[0]).toHaveStyle(`width: ${rating / 5 * 100}%`);
//   });

//   test('Can render 4.65 star as 4.75', () => {
//     var rating = 4.65;
//     var renderRating = 4.75;
//     render(<StarRating rating={rating} />);
//     const starInner = document.getElementsByClassName('review-stars-inner');
//     expect(starInner[0]).toHaveStyle(`width: ${renderRating / 5 * 100}%`);
//   });

// });

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
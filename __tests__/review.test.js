import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import reviewData from '../reviewSampleData.json';
import { StarRatingInput, StarRating } from '../client/src/review/starRating.jsx';
import { configure, shallow } from 'enzyme';
import '../client/src/app.css';

// Star Rating

//Each product has an average rating based on its reviews. The average rating of the product will be represented by an array of solid or outlined stars, where the number of solid stars represents the review score. A total of 5 stars should always appear. The number of stars filled in should correspond to the average score.

//The visual for rating should be representative of up to a quarter of a review point. For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.



afterEach(cleanup);

describe('App component', () => {
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



import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import QuestionApp from '../client/src/questions/QuestionApp.jsx'

afterEach(cleanup);

describe('Questions and Answers App', () => {
  test('it renders', () => {
    render(<QuestionApp />);
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });

  // test('', () => {
  //   render(<RelatedList />);
  //   var cards = document.getElementsByClassName('related_productCard');
  //   expect(cards.length).toEqual(1);
  // });
});

// describe('Search component', () => {
//   test('Search for term long', () => {
//     var term = 'long';
//     render(<StarRating rating={rating} />);
//     const starInner = document.getElementsByClassName('review-stars-inner');
//     expect(starInner[0]).toHaveStyle(`width: ${rating}%`);
//   });

  // test('Can render 4 star', () => {
  //   var rating = 4;
  //   render(<StarRating rating={rating} />);
  //   const starInner = document.getElementsByClassName('review-stars-inner');
  //   expect(starInner[0]).toHaveStyle(`width: ${rating / 5 * 100}%`);
  // });

  // test('Can render 4.65 star as 4.75', () => {
  //   var rating = 4.65;
  //   var renderRating = 4.75;
  //   render(<StarRating rating={rating} />);
  //   const starInner = document.getElementsByClassName('review-stars-inner');
  //   expect(starInner[0]).toHaveStyle(`width: ${renderRating / 5 * 100}%`);
  // });

});
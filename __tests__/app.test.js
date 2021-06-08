import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import reviewData from '../sampleData.json';


describe('App component', () => {
  test('it renders', () => {
    render(<App review={reviewData} />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});

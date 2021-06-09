import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import reviewData from '../reviewSampleData.json';
import { configure, shallow } from 'enzyme';

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});

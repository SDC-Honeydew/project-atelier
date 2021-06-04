import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from '../client/src/overview/overview.jsx';
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Overview Component', () => {
  test('it renders', () => {
    render(<Overview />);
    expect(screen.getByText('This will be the Overview component!!')).toBeInTheDocument();
  });
  test('Load four sub components', () => {
    render(<Overview />);

    expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
    expect(screen.getByTestId('image-gallery')).toBeInTheDocument();
    expect(screen.getByTestId('product-info')).toBeInTheDocument();
    expect(screen.getByTestId('style-select')).toBeInTheDocument();
  });
});
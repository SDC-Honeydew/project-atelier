import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from '../client/src/overview/overview.jsx';
import StyleSelector from '../client/src/overview/components/styleSelect.jsx';
import React from 'react';
import sampleData from '../client/src/overview/sampleRelevantData.json';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Overview Component', () => {
  describe('Testing Main Component', () => {
    test('it renders', () => {
      render(<Overview />);
      expect(screen.getByTestId('overview')).toBeInTheDocument();
    });
    test('Loads five sub components', () => {
      render(<Overview />);

      expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
      expect(screen.getByTestId('image-gallery')).toBeInTheDocument();
      expect(screen.getByTestId('product-info')).toBeInTheDocument();
      expect(screen.getByTestId('style-select')).toBeInTheDocument();
      expect(screen.getByTestId('product-description')).toBeInTheDocument();
    });
  });

  describe('Testing Style Selector with Sample Data', () => {
    test('Renders each style in selector', () => {
      var styles = sampleData.styles;
      let styleSelector = render(<StyleSelector styles={styles}/>);
      expect(styleSelector.getAllByRole('listitem').length).toEqual(styles.length);
    });
  });
});
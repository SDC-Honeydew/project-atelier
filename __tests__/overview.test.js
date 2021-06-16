import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from '../client/src/overview/overview.jsx';
import StyleSelector from '../client/src/overview/components/styleSelect.jsx';
import ImageGallery from '../client/src/overview/components/imageGallery.jsx';
import ProductInformation from '../client/src/overview/components/productInfo.jsx';
import ProductDescription from '../client/src/overview/components/productDescription.jsx';
import AddToCart from '../client/src/overview/components/addToCart.jsx';

import React from 'react';
import sampleData from '../client/src/overview/sampleRelevantData.json';

// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

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

  describe('Style Selector renders with Sample Data', () => {
    test('Renders each style in selector', () => {
      var styles = sampleData.styles;
      let styleSelector = render(<StyleSelector styles={styles} currentStyleIndex={0}/>);
      expect(styleSelector.getAllByRole('listitem').length).toEqual(styles.length);
    });
  });

  describe('Image Gallery renders with Sample Data', () => {
    test('Renders all photos', () => {
      var photos = sampleData.styles[0].photos;
      let imageGallery = render(<ImageGallery photos={photos} i={0}/>);

      expect(imageGallery.getAllByRole('img').length).toEqual(photos.length + 1);
      expect(imageGallery.getAllByRole('button').length).toEqual(2);
    });

  });

  describe('Product Info renders with Sample Data', () => {
    test('Renders category, name, price', () => {
      let productInfo = render(
        <ProductInformation
          category={sampleData.category}
          name={sampleData.name}
          price={sampleData.styles[0]}
        />);

      expect(productInfo.getAllByRole('heading').length).toEqual(3);
    });
  });

  describe('Product Description renders with Sample Data', () => {
    test('renders description and slogan ', () => {
      let productDescription = render(
        <ProductDescription
          description={sampleData.description}
          slogan={sampleData.slogan}
        />);
    });
  });

  describe('Add to Cart renders with Sample Data', () => {
    test('renders add to cart components', () => {
      let styles = sampleData.styles;
      let addToCart = render(<AddToCart data={styles} i={0}/>);
      let selectSize = screen.getByText(/select size/i);
      let selectQuantity = screen.getByText(/-/);

      expect(selectSize).toBeInTheDocument();
      expect(selectQuantity).toBeInTheDocument();
    });
  });
});
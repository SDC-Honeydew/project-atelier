import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from '../client/src/overview/overview.jsx';
import StyleSelector from '../client/src/overview/components/styleSelect.jsx';
import ImageGallery from '../client/src/overview/components/imageGallery.jsx';
import ProductInformation from '../client/src/overview/components/productInfo.jsx';
import ProductDescription from '../client/src/overview/components/productDescription.jsx';
import AddToCart from '../client/src/overview/components/addToCart.jsx';

import React from 'react';
import sampleData from '../client/src/overview/sampleRelevantData.json';
import carouselData from '../client/src/overview/caroselData.json';
import sizeData from '../client/src/overview/sizeData.json';

// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('Overview Component', () => {
//   describe('Testing Main Component', () => {
//     test('it renders', () => {
//       render(<ProductOverview />);
//       expect(screen.getByTestId('overview')).toBeInTheDocument();
//     });
//     test('Loads five sub components', () => {
//       render(<ProductOverview />);

//       expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
//       expect(screen.getByTestId('image-gallery')).toBeInTheDocument();
//       expect(screen.getByTestId('product-info')).toBeInTheDocument();
//       expect(screen.getByTestId('style-select')).toBeInTheDocument();
//       expect(screen.getByTestId('product-description')).toBeInTheDocument();
//     });
//   });

  describe('Style Selector renders with Sample Data', () => {
    test('Renders each style in selector', () => {
      var styles = sampleData.styles;
      let styleSelector = render(<StyleSelector styles={styles} currentStyleIndex={0}/>);
      expect(styleSelector.getAllByRole('listitem').length).toEqual(styles.length);
    });
  });

  describe('Image Gallery renders with Sample Data', () => {
    var photos = sampleData.styles[0].photos;
    var moreThanSeven = carouselData.styles[0].photos;

    test('Renders all photos', () => {
      let imageGallery = render(<ImageGallery photos={photos} i={0}/>);
      expect(imageGallery.getAllByRole('img').length).toEqual(photos.length + 1);
      expect(imageGallery.getAllByRole('button').length).toEqual(2);
    });
    test('Renders only seven thumbnails at a time', () => {
      let imageGallery = render(<ImageGallery photos={moreThanSeven} i={0}/>);
      expect(imageGallery.getAllByRole('img').length).toEqual(8)
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
    test('Renders sale price and original price', () => {
      let productInfo = render(
        <ProductInformation
          category={sizeData.category}
          name={sizeData.name}
          price={sizeData.styles[0]}
        />);

      expect(productInfo.getAllByRole('heading').length).toEqual(4);
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

    test('Shows "Out of Stock" when no products available', () => {
      let data = sizeData.styles;
      let cart = render(<AddToCart data={data} i={0} />);
      let outOfStock = cart.getByText(/out of stock/i);

      expect(outOfStock).toBeInTheDocument();

      let secondCart = render(<AddToCart data={data} i={1} />);
      let inStock = secondCart.getByText(/select size/i);

      expect(inStock).toBeInTheDocument();
    });
  });
});
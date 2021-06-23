import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import ProductOverview from '../client/src/overview/overview.jsx';
import StyleSelector from '../client/src/overview/components/styleSelect.jsx';
import ImageGallery from '../client/src/overview/components/imageGallery.jsx';
import ProductInformation from '../client/src/overview/components/productInfo.jsx';
import ProductDescription from '../client/src/overview/components/productDescription.jsx';
import AddToCart from '../client/src/overview/components/addToCart.jsx';
import ProductStyle from '../client/src/overview/components/productStyle.jsx';
import ThumbnailCarousel from '../client/src/overview/components/thumbnailCarousel.jsx';

import React from 'react';
import sampleData from '../client/src/overview/sampleRelevantData.json';
import carouselData from '../client/src/overview/caroselData.json';
import sizeData from '../client/src/overview/sizeData.json';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('Overview Component with Sample Data', () => {
  describe('Image Gallery Component-normalData', () => {
    const wrapper = shallow(
      <ImageGallery
        photos={sampleData.styles[0].photos}
        i={0}
        key={0}
      />
    );
    const thumbnails = wrapper.find('ThumbnailCarousel');
    test('Renders Main Image', () => {
      const mainImage = wrapper.find('.overview-image-gallery-img');
      expect(mainImage.length).toBe(1);
    });
    test('Renders Thumbnails', () => {
      expect(thumbnails.length).toBe(1);
    });
    test('Renders Thumbnail images', () => {
      const test = thumbnails.getElements();
      expect(test[0].props.imgs.length).toEqual(sampleData.styles[0].photos.length);
    });
    describe('Thumbnail Carousel Component-more than 7 thumbnail images', () => {
      const wrapper = shallow(
        <ThumbnailCarousel
          imgs={carouselData.styles[0].photos}
          mainImg={carouselData.styles[0].photos[0].url}
        />
      );
      test('Renders no more than seven at a time', () => {
        const renderedThumbnails = wrapper.find('.overview-thumbnails-img');
        const availableThumbnails = carouselData.styles[0].photos.length;

        expect(renderedThumbnails.length).toBeLessThanOrEqual(7);
        expect(renderedThumbnails.length).toBeLessThan(availableThumbnails);
      });
    });
  });

  describe('Product Information Component', () => {
    const wrapper = shallow(
      <ProductInformation
        category={sampleData.category}
        name={sampleData.name}
        price={sampleData.styles[0]}
      />
    );

    test('Renders category, name, and price', () => {
      const category = wrapper.find('.overview-productInfo-category');
      const name = wrapper.find('.overview-productInfo-name');
      const price = wrapper.find('.overview-productInfo-ogPrice');

      expect(category.length).toBe(1);
      expect(name.length).toBe(1);
      expect(price.length).toBe(1);
    });
  });


  describe('Style Selector Component', () => {
    const wrapper = shallow(
      <StyleSelector
        styles={sampleData.styles}
        currentStyleIndex={0}
      />
    );

    test('Renders all styles as images', () => {
      var styles = wrapper.find('ProductStyle');
      expect(styles.length).toBe(sampleData.styles.length);
    });

    test('Renders checkbox on main image style', () => {
      const productWrapper = shallow(
        <ProductStyle
          key={0}
          i={0}
          style={sampleData.styles[0]}
          currentStyle={sampleData.styles[0].name}
          showCheck={sampleData.styles[0].name === sampleData.styles[0].name}
        />
      );
      expect(productWrapper.find('p').length).toEqual(1);
    });
  });
  describe('Add to Cart Component', () => {
    describe('Renderds using sampleData', () => {
      const wrapper = shallow(
        <AddToCart
          data={sampleData.styles}
          i={0}
          key={0}
        />);
      test('Renders Buttons', () => {
        var sizeBtn = wrapper.find('Size');
        var quantityBtn = wrapper.find('Quantity');
        var addToCartBtn = wrapper.find('.overview-addToCart-button');

        expect(sizeBtn.length).toBe(1);
        expect(quantityBtn.length).toBe(1);
        expect(addToCartBtn.length).toBe(1);
      });
    });

    describe('Renders using sizeData', () => {
      const wrapper = shallow(
        <AddToCart
          data={sizeData.styles}
          i={0}
          key={0}
        />
      );
      test('Renders "Out Of Stock" when no size available', () => {
        var sizeBtn = wrapper.find('Size');
        expect(sizeBtn.html()).toMatch(/OUT OF STOCK/);
      });
    });

  });

  describe('Product Description Component', () => {
    const wrapper = shallow(<ProductDescription description={sampleData.description} slogan ={sampleData.slogan}/>);
    test('Renders data', () => {
      const slogan = wrapper.find('.overview-productDescription-slogan');
      const description = wrapper.find('.overview-productDescription-description');

      expect(slogan.text()).toBe(sampleData.slogan);
      expect(description.text()).toBe(sampleData.description);
    });
    // test('Matches snapshot', () => {
    //   const tree = renderer
    //     .create(<ProductDescription description={sampleData.description} slogan ={sampleData.slogan}/>)
    //     .toJSON();

    //   expect(tree).toMatchSnapshot();
    // });

  });
});
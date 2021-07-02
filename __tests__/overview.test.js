import { render, screen, cleanup } from '@testing-library/react';



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

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
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
    const mainImage = wrapper.find('.overview-image-gallery-img');
    test('Renders Main Image', () => {

      expect(mainImage.length).toBe(1);
    });
    test('Renders Thumbnails', () => {
      expect(thumbnails.length).toBe(1);
    });
    test('Renders Thumbnail images', () => {
      const test = thumbnails.getElements();
      console.log('imgs',test[0].props.imgs[0].url);
      console.log('sampledata', sampleData.styles[0].photos[0].url);

      expect(test[0].props.imgs.length).toEqual(sampleData.styles[0].photos.length);

      var renderedImgs = test[0].props.imgs;

      renderedImgs.forEach((img, i) => {
        var renderedUrl = img.url;
        var dataUrl = sampleData.styles[0].photos[i].url;

        expect(img.url).toEqual(dataUrl);
      });
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
      test('Renders down arrow to filter through images', () => {
        const downArrow = wrapper.find('.thumbnails-down');
        expect(downArrow.length).toBe(1);
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
      expect(category.text()).toBe(sampleData.category);
      expect(name.text()).toBe(sampleData.name);
      expect(price.text()).toBe(`$${sampleData.styles[0].original_price}`);
    });
    test('Renders sale price if it exists', () => {
      const wrapper = shallow(
        <ProductInformation
          category={sampleData.category}
          name={sampleData.name}
          price={sampleData.styles[2]}
        />
      );
      const price = wrapper.find('.overview-productInfo-sale-salePrice');
      expect(price.text()).toBe(`$${sampleData.styles[2].sale_price}`);
    });
  });

  describe('Style Selector Component', () => {
    const wrapper = mount(
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
      console.log(wrapper.find('ProductStyle').at(0));
      expect(wrapper.find('ProductStyle').at(0).find('p').length).toEqual(1);
      expect(wrapper.find('ProductStyle').at(1).find('p').length).toEqual(0);
    });

  });
  describe('Add to Cart Component', () => {
    describe('Renderds using sampleData', () => {
      const wrapper = mount(
        <AddToCart
          data={sampleData.styles}
          i={0}
          key={0}
        />);
      var sizeComponent = wrapper.find('Size');
      var quantityComponent = wrapper.find('Quantity');
      var addToCartComponent = wrapper.find('.overview-addToCart-button');

      var sizeBtn = wrapper.find('.overview-size-button');
      var quantityBtn = wrapper.find('.overview-quantity-button');
      var addToCartBtn = wrapper.find('.overview-addToCart-button');
      test('Renders Buttons', () => {
        expect(sizeComponent.length).toBe(1);
        expect(quantityComponent.length).toBe(1);
        expect(addToCartComponent.length).toBe(1);
      });
      test('Does not show quantity if size has not been selected', () => {
        quantityBtn.simulate('click');
        let quantityDropdown = wrapper.find('.overview-quantity-dropdown');
        expect(quantityDropdown.length).toBe(0);
      });
      //how to modify state????
      test('Shows dropdown on size click and renders sizes', () => {
        sizeBtn.simulate('click');
        let sizeDropdown = wrapper.find('.overview-size-dropdown');
        expect(sizeDropdown.length).toBe(1);

        let sizeList = sizeDropdown.find('.overview-addToCart-dropdown-li');

        expect(sizeList.at(0).text()).toBe('XS');
        expect(sizeList.at(1).text()).toBe('S');
        expect(sizeList.at(2).text()).toBe('M');
        expect(sizeList.at(3).text()).toBe('L');
        expect(sizeList.at(4).text()).toBe('XL');
      });
      // test('Shows quantity dropdown if size has been selected', () => {

      //   wrapper.setState({openQuantityDropdown: true});
      //   console.log(wrapper.html())
      //   let quantityDropdown = wrapper.find('.overview-quantity-dropdown');

      //   expect(quantityDropdown.length).toBe(1)
      // })
      test('Click add to cart shows popup to select size', () => {
        addToCartBtn.simulate('click');
        let popup = wrapper.find('.overview-image-gallery-popup-container');

        expect(popup.length).toBe(1);
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
  });

  // describe('Mock Functions', () => {
  //   let wrapper;

  //   const props = {
  //     product: sampleData,
  //     currentStyleIndex: 0
  //   };

  //   beforeEach(() => {
  //     wrapper = shallow(<ProductOverview {...props}/>);
  //   });

  //   test('should check `componentDidMount()`', () => {
  //     const instance = wrapper.instance();
  //     jest.spyOn(instance, 'getOneProduct');
  //     instance.componentDidMount();
  //     expect(instance.getOneProduct).toHaveBeenCalledTimes(1);
  //   });
  //});
});
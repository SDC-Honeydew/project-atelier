import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import renderer from 'react-test-renderer';
import puppeteer from 'puppeteer';


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

// describe('End 2 End Testing', () => {
//   test('Loads page', async () => {
//     let browser = await puppeteer.launch({headless: true});
//     let page = await browser.newPage();
//     await page.goto('http://localhost:3000', {waitUntil: 'networkidle2'});
//     await page.waitForSelector('.overview-productDescription-description');

//     const productDescription = await page.$eval('.overview-productDescription-description', e => e.innerHTML);

//     expect(productDescription).toBe(sampleData.description);
//     browser.close();
//   });
// });

test('placeholder', () => {
  expect(true).toBe(true)
})
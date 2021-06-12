import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';

// Related Product Cards
// The related product lists will consist of cards.  Each card will display the information for a single product.

// The card itself will be clickable. Clicking the card will navigate to the detail page for that product.

// 1.4.1.1.  Product Information
// The following information will appear on the card.  This information will all be read-only and will not have any interactivity associated.
// Product Category

// Product Name

// Price - As the price is not actually derived from the product, the price displayed should be that for the default style. Sale prices should be reflected.  If the style is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.


// Star Rating (# of Reviews) - Each product has an average rating based on its reviews.  The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.


// The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.  If there are no reviews, this entire section should be hidden.

// 1.4.1.2.  Product Preview Images
// The product card should display preview images of the related products.  The images which appear on the product card should be the same that appear in the Overview module on the item detail page for that product.
// By default, the preview image displayed on each card will be the primary image for that product.  This should be the same which first appears on the image detail page’s image gallery.

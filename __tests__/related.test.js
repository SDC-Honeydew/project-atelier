import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import RelatedProducts from '../client/src/related/relatedProducts.jsx';
import RelatedList from '../client/src/related/relatedList.jsx';
import ProductCard from '../client/src/related/productCard.jsx';
import ComparisonModal from '../client/src/related/comparisonModal.jsx';
import OutfitList from '../client/src/related/outfitList.jsx';

var products = [
  {
    'id': 11,
    'name': 'Air Minis 250',
    'category': 'Basketball Shoes',
    'original_price': '0',
    'image': 'urlplaceholder/style_1_photo_number.jpg',
    'avgReview': 4.3,
    'features': [
      {
        'feature': 'Sole',
        'value': 'Rubber'
      },
      {
        'feature': 'Material',
        'value': 'FullControlSkin'
      }
    ]
  },
  {
    'id': 14,
    'name': 'Air Moonis 250',
    'category': 'Soccer Shoes',
    'original_price': '350',
    'sale_price': '300',
    'image': 'urlplaceholder/style_1_photo_number.jpg',
    'avgReview': 4.3,
    'features': [
      {
        'feature': 'Sole',
        'value': 'Wood'
      },
      {
        'feature': 'Color',
        'value': 'White'
      }
    ]
  },
  {
    'id': 14,
    'name': 'Truthy Trainers',
    'category': 'Running Shoes',
    'original_price': '0',
    'image': 'urlplaceholder/style_1_photo_number.jpg',
    'avgReview': 4.3,
    'features': [
      {
        'feature': 'Sole',
        'value': 'Pure'
      },
      {
        'feature': 'Waterproof',
        'value': true
      }
    ]
  },
];

afterEach(cleanup);

describe('Related Products List', () => {
  test('it renders', () => {
    render(<RelatedList />);
    expect(screen.getByText('RELATED PRODUCTS')).toBeInTheDocument();
  });

  //consider refactoring to have products in related list component
  test('Each card will show information for single product', () => {
    render(<RelatedList />);
    var cards = document.getElementsByClassName('related_productCard');
    expect(cards.length).toEqual(1);
  });
});


describe('Product card', () => {
  test('It will render info for a single product', () => {
    render(<ProductCard productInfo={products[0]}/>);
    expect(screen.queryByText('Air Moonis 250')).not.toBeInTheDocument();
  });

  test('It will show the product name', () => {
    render(<ProductCard productInfo={products[0]}/>);
    expect(screen.getByText('Air Minis 250')).toBeInTheDocument();
  });

  test('It will show the price/sale price', () => {
    render(<ProductCard productInfo={products[1]}/>);
    expect(screen.getByText('$300')).toBeInTheDocument();
    const salePrice = document.getElementsByClassName('related_sale');
    expect(salePrice[0].innerHTML).toBe('$350');
  });

  test('It will show the category', () => {
    render(<ProductCard productInfo={products[1]}/>);
    expect(screen.getByText('Soccer Shoes')).toBeInTheDocument();
  });

  test('It will show display a preview image', () => {
    render(<ProductCard productInfo={products[1]}/>);
    const productImage = document.getElementsByClassName('related_productCardImage');
    expect(productImage[0].src).toBe('http://localhost/urlplaceholder/style_1_photo_number.jpg');
  });

});

describe('Comparison Modal', () => {
  test('The modal should be titled “Comparing”.', () => {
    render(<ComparisonModal currentProd={products[0]} comparisonProd={products[1]} showModal={true}/>);
    expect(screen.getByText('COMPARING')).toBeInTheDocument();
  });

  test('All characteristics for both products will be combined and reconciled against one another.', () => {
    render(<ComparisonModal currentProd={products[0]} comparisonProd={products[1]} showModal={true}/>);
    var featureRows = document.getElementsByClassName('related_featureRow');
    expect(featureRows.length).toEqual(3);
  });

  test('If the characteristic has a specific value it should display.', () => {
    render(<ComparisonModal currentProd={products[0]} comparisonProd={products[1]} showModal={true}/>);
    var soleValue = document.getElementsByClassName('related_test_Sole')[0].innerHTML;
    expect(soleValue).toEqual('Wood');
  });

  test('If the characteristic is a fact such that it is ‘true’ for the given product, then the value should display as a checkmark.', () => {
    render(<ComparisonModal currentProd={products[0]} comparisonProd={products[2]} showModal={true}/>);
    expect(screen.getByText('✓')).toBeInTheDocument();
  });

  test(' For any characteristics that do not apply to the product, the value should simply be left blank.', () => {
    render(<ComparisonModal currentProd={products[0]} comparisonProd={products[1]} showModal={true}/>);
    var materialValue = document.getElementsByClassName('related_test_Material')[0].innerHTML;
    expect(materialValue).toEqual('');
  });

});

describe('Outfit List', () => {
  test('The list will be titled “Your Outfit"', () => {
    render(<OutfitList item={'22132'} handleCardClick={null}/>);
    expect(screen.getByText('YOUR OUTFIT')).toBeInTheDocument();
  });

  test('By default, this list should contain no products within it.', () => {
    render(<OutfitList item={'22132'} handleCardClick={null}/>);
    var products = document.getElementsByClassName('related_productCard');
    expect(products.length).toEqual(1);
  });

  test('The first card will not display a product and will read "Add to Outfit"', () => {
    render(<OutfitList item={'22132'} handleCardClick={null}/>);
    var add = document.getElementsByClassName('related_addToOutfit');
    expect(add[0].innerHTML).toEqual(expect.stringContaining('Add to Outfit'));
  });

  test('Items will be added to the list only when a user explicitly selects them to be added.', () => {

    render(<OutfitList item={'22132'} handleCardClick={null}/>);
    const add = screen.getByText('Add to Outfit');
    fireEvent.click(add);
    setTimeout(expect(document.cookie).not.toEqual('undefined'), 5000);



  });
});
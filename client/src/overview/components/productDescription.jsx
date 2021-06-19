import React from 'react';

const ProductDescription = (props) => {
  return (
    <div data-testid='product-description'>
      <h5 className='overview-productDescription-slogan'>{props.slogan}</h5>
      <p className='overview-productDescription-description'>{props.description}</p>
    </div>
  );
};

export default ProductDescription;
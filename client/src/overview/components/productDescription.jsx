import React from 'react';

const ProductDescription = (props) => {
  return (
    <div data-testid='product-description'>
      <h5>{props.slogan}</h5>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductDescription;
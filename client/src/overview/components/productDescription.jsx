import React from 'react';

const ProductDescription = (props) => {
  var features;

  if (props.features) {
    features = props.features.map(feature => {
      return <span>{`${feature.feature}: ${feature.value}`}</span>;
    });
  }

  return (
    <div className='overview-product-description-container'>
      <div className='overview-descriptions'>
        <h3 className='overview-productDescription-slogan'>{props.slogan}</h3>
        <p className='overview-productDescription-description'>{props.description}</p>
      </div>
      <div className='overview-features'>
        {features}
      </div>
    </div>
  );
};

export default ProductDescription;
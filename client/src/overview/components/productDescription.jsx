import React from 'react';

const ProductDescription = (props) => {
  var features;

  if (props.features) {
    features = props.features.map(feature => {
      return <span>{`${feature.feature}: ${feature.value}`}</span>;
    });
  }

  console.log(features)
  return (
    <div className='overview-product-description-container'>
      <div className='overview-descriptions'>
        <h5 className='overview-productDescription-slogan'>{props.slogan}</h5>
        <p className='overview-productDescription-description'>{props.description}</p>
      </div>
      <div className='overview-features'>
        {features}
      </div>
    </div>
  );
};

export default ProductDescription;
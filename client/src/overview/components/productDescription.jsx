import React from 'react';

const ProductDescription = (props) => {
  var features;

  if (props.features) {
    features = props.features.map(feature => {
      return <div><span className='overview-feature-check'>&#10003;</span>&nbsp;&nbsp;{`${feature.feature}: ${feature.value}`}</div>;
    });
  }

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
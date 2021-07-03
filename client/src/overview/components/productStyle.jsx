import React from 'react';

const ProductStyle = (props) => {
  return (
    <li className='overview-styles-imgs' data-testid='product-style'>
      <img
        src={props.style.photos[0].thumbnail_url}
        onClick={() => props.toggle(props.i)}
        className='overview-styles-img'
        height='50'
        width='50'
        alt={props.style.name}>
      </img>
      {props.showCheck && <p className='overview-styles-checkbox'>&#9989;</p>}
    </li>
  );
};

export default ProductStyle;
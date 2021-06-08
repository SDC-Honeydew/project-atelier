import React from 'react';

const Check = (props) => {
  return (<img
    src='https://cdn.pixabay.com/photo/2016/10/10/01/49/hook-1727484_1280.png'
    className='overview-styles-checkbox'
    height='10'
    width='10'></img>
  );
};

const ProductStyle = (props) => {
  return (
    <li className='overview-styles-imgs'>
      <img
        src={props.style.photos[0].thumbnail_url}
        onClick={() => props.toggle(props.style.name)}
        className='overview-styles-img'
        height='50'
        width='50'>
      </img>
      {props.showCheck && <Check />}
      <p>{props.style.name}</p>
    </li>
  );
};

export default ProductStyle;
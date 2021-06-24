import React from 'react';
import ProductStyle from './productStyle.jsx';

const StyleSelector = (props) => {
  return (
    <div>
        <div className='overview-styleSelector-style'>
          <p className='overview-style'>Style ></p><p className='overview-style-title'> {props.styles[props.currentStyleIndex].name}</p>
        </div>
        <ul className='overview-styles-thumbnails-container' data-testid='style-select'>
          {props.styles.map((style, i) => {
            return (
              <ProductStyle
                key={i}
                i={i}
                style={style}
                toggle={props.setCurrentStyleIndex}
                currentStyle={props.styles[props.currentStyleIndex].name}
                showCheck={props.styles[props.currentStyleIndex].name === style.name}
              />);
          })}
        </ul>
      </div>
  )
}

export default StyleSelector;
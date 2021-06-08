import React from 'react';



const ProgressBar = (props) => {
  const divStyle = {
    width: '25%',
  }
  return (
    <div className="w-75 review-row">
      <div className='review-rating-text'>{props.text}</div>
      <div className='review-rating-progress'>
        <div className="progress">
          <div className="progress-bar" style={divStyle}></div>
        </div>
      </div>
    </div>
  )
};

export default ProgressBar;
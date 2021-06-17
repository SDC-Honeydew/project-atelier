import React from 'react';



const ProgressBar = (props) => {
  return (
    <div className="review-row">
      <div className='review-rating-text'>{props.text}</div>
      <div className='review-rating-progress'>
        <div className="progress">
          <div className="progress-bar" style={{ width: props.percentage + '%' }}></div>
        </div>
      </div>
      <div className='review-rating-text'>{props.percentage + '%'}</div>
    </div>
  );
};

export default ProgressBar;
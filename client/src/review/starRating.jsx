import React, { useState } from 'react';
const StarRating = (props) => (
  <div>
    <div className='review-stars-outer review-star1' >
      <div className='review-stars-inner' style={{ width: Math.round(props.rating / 0.25) * 0.25 / 5 * 100 + '%' }}></div>
    </div>
  </div >
);

const Star = (props) => {
  const changeGrade = (e) => {
    props.changeGradeIndex(e.target.value);
  };
  return (
    <label className="review-star-input" style={props.style}>
      <input
        type="radio"
        name="rating"
        value={props.index}
        className="review-stars_radio-input"
        onClick={changeGrade}
        required />
      ★
    </label>
  );
};

const StarRatingInput = (props) => {
  const [gradeIndex, setGradeIndex] = useState();
  const GRADES = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
  const activeStar = {
    color: '#f8ce0b'
  };

  const changeGradeIndex = (index) => {
    setGradeIndex(index);
    if (props.onClick) {
      props.onClick(Number(index) + 1);
    }
  };

  return (
    <div className="review-star-container">
      <h6 className="review-star-result">{GRADES[gradeIndex] ? GRADES[gradeIndex] : 'You didn\'t review yet'}</h6>
      <div className="review-star-inputs">
        {
          GRADES.map((grade, index) => (
            <Star
              index={index}
              changeGradeIndex={changeGradeIndex}
              style={gradeIndex >= index ? activeStar : { color: '#ccc' }}
            />
          ))
        }
      </div>
    </div>
  );
};

export { StarRatingInput, StarRating };
export default StarRating;
import React from 'react';

const charRatings = {
  Size: [
    'Small',
    'Perfect',
    'Big'],
  Width: [
    'narrow',
    'Perfect',
    'Wide'],
  Comfort: [
    'Poor',
    'Ok',
    'Perfect'],
  Quality: [
    'Poor',
    'Expected',
    'Perfect'],
  Length: [
    'Short',
    'Perfect',
    'Long'],
  Fit: [
    'Tight',
    'Perfect',
    'Long']
};

const CharBar = (props) => (
  <div className="review-productbreakdown-charbar">
    <div style={{ width: '250px', marginLeft: '50px' }}>
      <h5>{props.charName}</h5>
      <div className="review-productbreakdown-text-container">
        {charRatings[props.charName].map(rating => <label>{rating}</label>)}
      </div>
      <div className="review-productbreakdown-input">
        <div className="review-productbreakdown-text-container">
          <div className="review-productbreakdown-bar" />
          <div className="review-productbreakdown-bar" />
          <div className="review-productbreakdown-bar" />
        </div>
        <div className="review-productbreakdown-pointer" style={{ left: props.charData.value / 5 * 100 + '%' }}>♦</div>
      </div>
    </div>
  </div>
);


const ProductBreakdown = (props) => {

  return (
    <div>
      {Object.keys(props.data.characteristics).map(key => <CharBar charData={props.data.characteristics[key]} charName={key} />)}
    </div>
  );
};


export default ProductBreakdown;
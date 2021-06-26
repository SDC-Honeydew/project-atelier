import React, { useState } from 'react';
import { StarRatingInput } from './starRating.jsx';
import $ from 'jquery';

const RecommendInput = (props) => (
  <div className='form-check review-recommend-input'>
    <input className="form-check-input" id='review-recommend-checkbox' type="checkbox" name='recommend' onChange={props.onChange} defaultChecked={false} required />
    <label className="form-check-label" >I recommend this product</label>
  </div>
);

const CharacteristicsInput = (props) => (
  <div className='review-char-inputs'>
    <div style={{ width: '100px' }}>
      {props.type + ' :'}
    </div>
    {
      props.ratings.map((rating, index) =>
      (<div style={{ width: '150px', fontSize: '12px' }} >
        <label htmlFor={rating} >{rating}</label><br />
        <input type="radio" name={'characteristics[' + props.id + ']'} value={index + 1} onClick={props.onClick} required />
      </div>)
      )
    }
    <br />
  </div>
);

const ReviewSummaryInput = (props) => (
  <div className="input-group mb-3">
    <span className="input-group-text">Summary </span>
    <textarea className="form-control" name='summary' aria-label="With textarea" maxLength='60'>default value</textarea>
  </div>
);

const ReviewBodyInput = (props) => (
  <div className="input-group mb-3">
    <span className="input-group-text">Comments</span>
    <textarea className="form-control" name='body' aria-label="With textarea" minLength='50' maxLength='1000' required></textarea>
  </div>
);

const UploadPhoto = (props) => (
  <div className="input-group input-group-sm mb-3">
    <span className="input-group-text">Photo Url</span>
    <textarea className="form-control" name='photos[]' aria-label="With textarea"></textarea>
  </div>
);

const UserInfoInput = (props) => (
  <div>
    <label htmlFor="username">Name:</label>
    <input className='form-control' type="text" name="name" required /><br />
    <label htmlFor="email">Email:</label>
    <input className='form-control' type="email" name="email" required /><br />
  </div>
);



const AddReviewPopup = (props) => {
  const [submitted, setSubmit] = useState(false);
  const [numOfPhoto, setNumOfPhoto] = useState(false);
  const closeForm = () => {
    setSubmit(false);
    props.close();
  };
  const addPhoto = () => {
    setNumOfPhoto(numOfPhoto + 1);
  };

  const removePhoto = () => {
    setNumOfPhoto(Math.max(0, numOfPhoto - 1));
  };

  const charRatings = {
    Size: [
      'A size too small',
      '½ a size too small',
      'perfect',
      '½ a size too big',
      'A size too wide'],
    Width: [
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide'],
    Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'],
    Quality: [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect'],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long'],
    Fit: [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long']
  };
  const charTypes = ['Comfort', 'Quality', 'Length', 'Fit'];
  const charIds = [74288, 74289, 74287, 74286];
  const onSubmit = (e) => {
    e.preventDefault();
    var data = $('#review-add-review-form');
    if (props.jestcall) {
      props.jestcall({ data: data.serialize() });
    }
    $.ajax({
      url: '/reviews',
      type: 'POST',
      data: data.serialize(),
      dataType: 'json',
      success: (res) => {
        if (props.submitCallback !== undefined) {
          props.submitCallback(res);
        }
        setSubmit(true);
      },
      error: (err) => {
        if (props.errorCallback !== undefined) {
          props.errorCallback(err);
        }
      }
    });
    return false;
  };

  return (props.trigger) ? (
    <div className='review-popup'>
      <div className='review-popup-inner overflow-auto' style={{ maxHeight: '800px', width: '1000px' }}>
        {
          !submitted &&
          <form id='review-add-review-form' method='post' onSubmit={onSubmit}>
            <input type='hidden' name='product_id' value={props.id} />
            <StarRatingInput />
            <RecommendInput />
            {charTypes.map((charType, index) => <CharacteristicsInput type={charType} ratings={charRatings[charType]} id={charIds[index]} />)}
            <ReviewSummaryInput />
            <ReviewBodyInput />
            <button type='button' id='review-add-photo-btn' className='btn btn-secondary' onClick={addPhoto} >Add a photo</button>
            {numOfPhoto > 0 && <button type='button' className='btn btn-secondary m-3' onClick={removePhoto} >Remove a photo</button>}
            {numOfPhoto > 0 && <UploadPhoto />}
            {numOfPhoto > 1 && <UploadPhoto />}
            {numOfPhoto > 2 && <UploadPhoto />}
            {numOfPhoto > 3 && <UploadPhoto />}
            {numOfPhoto > 4 && <UploadPhoto />}
            <UserInfoInput />
            <div style={{ textAlign: 'center' }}>
              <button type='submit' id='review-add-review-submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
        }
        {
          submitted &&
          <div style={{ textAlign: 'center' }}>
            <h2>Thanks for your review!</h2>
            <button className='btn btn-primary m-3' onClick={closeForm}>OK</button>
          </div>
        }
        <button className='btn-close' aria-label='Close' onClick={closeForm}></button>
      </div>
    </div>
  ) : '';
};

export default AddReviewPopup;
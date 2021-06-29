import React, { useState } from 'react';
import StarRating from './starRating.jsx';
import $ from 'jquery';

const Response = (props) => (
  <div className='review-response-text'>
    {(props.response && props.response.length > 0) && <div><h6>Response</h6><br />{props.reponse}</div>}
  </div>
);

const ReviewComp = (props) => {
  const [hidden, setHidden] = useState(true);
  const [markedHelpful, setMarkedHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const showAllBody = () => {
    setHidden(false);
  };

  const markReviewHelpful = () => {
    if (markedHelpful) {
      alert('You have already marked this review helpful.');
      return;
    }
    const review_id = props.result.review_id;
    $.ajax({
      url: '/reviews/helpful',
      data: { review_id },
      dataType: 'json',
      method: 'put',
      success: () => {
        console.log('success');
        setMarkedHelpful(true);
        props.result.helpfulness++;
      }
    });
  };

  const reportReview = () => {
    if (reported) {
      alert('You have already reported this review');
      return;
    }
    const review_id = props.result.review_id;
    $.ajax({
      url: '/reviews/report',
      data: { review_id },
      dataType: 'json',
      method: 'put',
      success: () => {
        console.log('success');
      }
    });
    setReported(true);
  };


  return (
    <div className='review-grid-card-container card'>
      <div className='review-card-rating-area'><StarRating rating={props.result.rating} /></div>
      <div className='review-card-user-area'>{props.result.reviewer_name + ', ' + props.result.date.split('T')[0]}</div>
      <div className='review-card-title-area'>
        <h6 className="mb-2" maxLength={60}>{props.result.summary.substring(0, 60)}</h6>
      </div>
      <div className='review-card-body-area'>
        <div className="card-text">
          <div className='review-body'>
            {props.result.body.length > 250 && hidden ? props.result.body.substr(0, 250) + '...' : props.result.body}
          </div>
          <br />
          {props.result.body.length > 250 && hidden ? <a className="card-link review-hand" onClick={showAllBody}>show more...</a> : ''}
          <br />
          {props.result.photos.map(photo => <img src={photo.url} width="100px" height="100px" />)}
          <br />
          {props.result.recommend && <p>✅ I recommend this item</p>}
        </div>

      </div>
      <div className='review-card-response-area'>
        <Response reponse={props.result.response} />
        Helpful?<a className="card-link review-hand" onClick={markReviewHelpful}> {props.result.helpfulness > 0 ? 'Yes(' + props.result.helpfulness + ')' : 'Yes'}</a>
        <a className="card-link review-hand" onClick={reportReview}>Report</a>
      </div>
    </div >
  );
};

export default ReviewComp;
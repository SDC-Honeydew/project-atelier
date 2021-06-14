import React from 'react';
import StarRating from './starRating.jsx';


const Response = (props) => (
  <div className='review-response-text'>
    { (props.response && props.response.length > 0) && <div><h6>Response</h6><br />{props.reponse}</div>}
  </div>
);

const ReviewComp = (props) => (
  <div className='review-grid-card-container card'>
    <div className='review-card-rating-area'><StarRating rating={props.result.rating} /></div>
    <div className='review-card-user-area'>{props.result.reviewer_name + ', ' + props.result.date.split('T')[0]}</div>
    <div className='review-card-title-area'>
      <h6 className="card-subtitle mb-2 text-muted">{props.result.summary}</h6>
    </div>
    <div className='review-card-body-area'>
      <p className="card-text">
        {props.result.body}
        {props.result.photos.map(photo => <img src={photo.url} />)}
        {props.result.recommend && <div>✅ I recommend this item</div>}
      </p>

    </div>
    <div className='review-card-response-area'>
      <Response reponse={props.result.response} />
      Helpful?<a href="#" className="card-link"> {props.result.helpfulness > 0 ? 'Yes(' + props.result.helpfulness + ')' : 'Yes'}</a>
      <a href="#" className="card-link">Report</a>
    </div>
  </div>
);

export default ReviewComp;
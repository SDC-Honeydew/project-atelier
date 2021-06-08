import React from 'react';
import StarRating from './starRating.jsx';

const ReviewComp = (props) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title"><StarRating rating={props.result.rating} /></h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.result.summary}</h6>
      <p className="card-text">
        {props.result.body}
        {props.result.photos.map(photo => <img src={photo.url} />)}
      </p>
      <a href="#" className="card-link">more review</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
);

export default ReviewComp;
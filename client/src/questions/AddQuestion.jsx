import React from 'react';
import ReactDOM from 'react-dom';
import trackClicks from '../tracking/trackClicks.jsx'

const AddQuestion = (props) => (
  <button className="btn btn-primary" onClick={() => props.setAddQModalShow(true)}> ADD QUESTION +</button>
)

export default AddQuestion;

// onClick={() => props.setAddQModalShow(true)}
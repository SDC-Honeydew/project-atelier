import React from 'react';
import ReactDOM from 'react-dom';
import trackClicks from '../tracking/trackClicks.jsx'

const AddQuestion = (props) => (
  <button className="qa-ma-button" onClick={() => props.setAddQModalShow(true)}> Add Question +</button>
)

export default AddQuestion;


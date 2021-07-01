import React from 'react';
import ReactDOM from 'react-dom';

const AddAnswer = (props) => {
  return(
  <button className="qa-addAnswer" onClick={() => props.setAddAModalShow(true, props.q)}> <u>Add Answer</u></button>
  )
}

export default AddAnswer;
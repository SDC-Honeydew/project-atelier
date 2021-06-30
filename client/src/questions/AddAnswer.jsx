import React from 'react';
import ReactDOM from 'react-dom';

const AddAnswer = (props) => {
  {console.log(props.q, 'in add answer')}
  return(
  <button className="qa-addAnswer" onClick={() => props.setAddAModalShow(true, props.q)}> <u>Add Answer</u></button>
  )
}

export default AddAnswer;
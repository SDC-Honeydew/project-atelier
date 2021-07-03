import React from 'react';
import ReactDOM from 'react-dom';

const MoreQuestions = (props) => {
  if(props.length <= props.displayedQuestions) {
    return null
  }
  return (
    <button className="btn btn-primary" onClick={() => props.onClick()}> MORE ANSWERED QUESTIONS</button>
  )

}

export default MoreQuestions;
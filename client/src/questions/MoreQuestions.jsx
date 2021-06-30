import React from 'react';
import ReactDOM from 'react-dom';

const MoreQuestions = (props) => {
  if(props.length <= props.displayedQuestions) {
    return null
  }
  return (
    <button className="qa-ma-button" onClick={() => props.onClick()}> More Answered Questions</button>
  )

}

export default MoreQuestions;
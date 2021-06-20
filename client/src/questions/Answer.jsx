import React from 'react';
import ReactDOM from 'react-dom';

const Answer = (props) => {
  console.log('header A', props.header)
  if(props.answer === undefined) {
    return null
  }

  return(

  <div className="qa-answer-body">
    {props.header}  {props.answer.body}
    <div className="qa-answer-user">
      by {props.answer.answerer_name}, {new Date(props.answer.date).toDateString()} {'|'} <button className="qa-answer-button" onClick={() => props.onClickHelpfulA(props.answer)}> Helpful? <u>Yes</u> ({props.answer.helpfulness})</button> {'|'}
      {props.reported ? <u>Reported</u> : <button><u>Report</u></button>}
      <br></br>
    </div>
  </div>
  )
}

export default Answer
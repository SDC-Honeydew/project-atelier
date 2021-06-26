import React from 'react';
import ReactDOM from 'react-dom';

const Answer = (props) => {
  console.log(props.reportAnswer, 'ANSWER PROPS')
  if(props.answer === undefined) {
    return null
  }

  return(

  <div className="qa-answer-body">
    {props.header}  {props.answer.body}
    <br></br>
    <div className="qa-answer-user">
      by {props.answer.answerer_name}, {new Date(props.answer.date).toDateString()} {'|'} <button className="qa-answer-button" onClick={() => props.onClickHelpfulA(props.answer)}> Helpful? <u>Yes</u> ({props.answer.helpfulness})</button> {'|'}
      {props.reported ? <button className="qa-report-btn" onClick={() => props.reportAnswer(props.answer)}><u>Report</u></button> : <div>Reported</div>}
      <br></br>
    </div>
  </div>
  )
}

export default Answer
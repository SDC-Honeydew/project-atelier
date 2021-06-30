// import React from 'react';
// import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import $ from 'jquery';

const Answer = (props) => {
  const [reported, setReported] = useState(false);

  const reportAnswer= () => {
    if (reported) {
      return;
    }
    const answer_id = props.answer.id
    $.ajax({
      url: '/qa/answers/report',
      data: { answer_id },
      dataType: 'json',
      method: 'put',
      success: () => {
        console.log('success');
      }
    });
    setReported(true);
  };

  if(props.answer === undefined) {
    return null;
  }

  return(
    <div className="qa-answer-body">
      {props.header}  {props.answer.body}
      <br></br>
      <div className="qa-answer-user">
        by {props.answer.answerer_name}, {new Date(props.answer.date).toDateString()} {'|'} <button className="qa-answer-button" onClick={() => props.onClickHelpfulA(props.answer)}> Helpful? <u>Yes</u> ({props.answer.helpfulness})</button> {'|'}
        {!reported ? <button className="qa-report-btn" onClick={reportAnswer}><u>Report</u></button> : <span>Reported</span>}
        <br></br>
      </div>
    </div>
  );
};

export default Answer;
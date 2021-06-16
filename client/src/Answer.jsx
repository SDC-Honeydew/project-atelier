import React from 'react';
import ReactDOM from 'react-dom';

const Answer = (props) => {

  if(props.answer === undefined) {
    return null
  }

  return(

  <div>
    {props.answer.body}
    <div>
      by {props.answer.answerer_name}, {new Date(props.answer.date).toDateString()} {'|'} <button onClick={() => props.onClickHelpful(props.answer)}> Helpful? <u>Yes</u> ({props.answer.helpfulness})</button><br></br>
      <br></br>
    </div>
  </div>
  )
}

export default Answer
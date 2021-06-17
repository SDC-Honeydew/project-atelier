import React from 'react';
import ReactDOM from 'react-dom';
import AnswerList from './AnswerList.jsx'

const Question = (props) => {
  console.log('made it to Question')

  return(
  <div>
    <div className="qa-question">
      {console.log("inQ")}
      <div className="qa-question-body" >Q: {props.question.question_body}<button className="qa-helpful" onClick={() => props.onClickHelpful(props.question)}> Helpful? <u>Yes</u> ({props.question.question_helpfulness})</button><button> <u>Add Answer</u> </button><br></br>
      <br></br></div>
    </div>
    <div className="qa-answer">
      <div>A: <AnswerList answers={props.question.answers} onClickHelpfulA={props.onClickHelpfulA}/></div>
    </div>
  </div>
  )
}
// {props.question.body}
export default Question;
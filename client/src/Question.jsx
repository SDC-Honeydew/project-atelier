import React from 'react';
import ReactDOM from 'react-dom';

const Question = (props) => (
  <div className="question">
    <div className="question-body" >Q: Question</div>
    <div className="answer" > A: Answer</div>
  </div>
)
// {props.question.body}
export default Question;
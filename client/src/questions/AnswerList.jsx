import React from 'react';
import ReactDOM from 'react-dom';
import Answer from './Answer.jsx';

const AnswerList = (props) => {
  console.log("in Answer List", props.answers)
  if(props.answers.length < 1) {
    return(null)
  }
  // if (!props.moreQuestions) {
  // else {
    return(
    <div className="qa-answer-list">
      <Answer header={'A:'} answer={props.answers[0]} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported}/>
      <Answer answer={props.answers[1]} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported} reportAnswer={props.reportAnswer}/>
    </div>
    )

}

export default AnswerList;
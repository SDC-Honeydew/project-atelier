import React from 'react';
import ReactDOM from 'react-dom';
import Answer from './Answer.jsx';

const AnswerList = (props) => {
  console.log(props.answers)
  if(props.answers.length < 1) {
    return(null)
  }
  // if (!props.moreQuestions) {
  // else {
    return(
    <div className="qa-answer-list">
      {console.log('inLIST', props.answers)}
      <Answer answer={props.answers[0]} onClickHelpfulA={props.onClickHelpfulA}/>
      <Answer answer={props.answers[1]} onClickHelpfulA={props.onClickHelpfulA}/>
    </div>
  )

}

export default AnswerList;
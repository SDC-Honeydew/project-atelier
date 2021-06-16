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
      <Answer answer={props.answers[0]} onClickHelpful={props.onClickHelpful}/>
      <Answer answer={props.answers[1]} onClickHelpful={props.onClickHelpful}/>
    </div>
  )

}

export default AnswerList;
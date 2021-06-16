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
    <div className="question-list">
      {console.log('inLIST', props.answers)}
        <Answer answer={props.answers[0]} />
        <Answer answer={props.answers[1]} />
    </div>
  )

}

export default AnswerList;
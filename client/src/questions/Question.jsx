import React from 'react';
import ReactDOM from 'react-dom';
import AnswerList from './AnswerList.jsx'
import AddAnswerModal from './AddAnswerModal.jsx'
import AddAnswer from './AddAnswer.jsx'

const Question = (props) => {
  console.log('made it to Question')
  return(
  <div className="qa-question">
    <div>
      {console.log("inQ")}
      <div className="qa-question-body" >Q: {props.question.question_body}
        <div className="qa-divider"/>
        <div className="qa-divider"/>
        <div className="qa-question-buttons">
          <button className="qa-helpful-button" onClick={() => props.onClickHelpful(props.question)}> Helpful? <u>Yes</u> ({props.question.question_helpfulness})</button> {'|'}
          {console.log('after button in question', props.question.question_body)}
          <AddAnswer setAddAModalShow={props.setAddAModalShow} q={props.question.question_body}/>
          <AddAnswerModal show={props.show} onClose={() => props.setAddAModalShow(false)} addAnswer={props.addAnswer}q={props.question.question_body}/>

        </div>
      </div>
    </div>
    <div className="qa-answer">
      <div><AnswerList answers={props.question.answers} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported}reportAnswer={props.reportAnswer}/></div>
    </div>
  </div>
  )
}
// {props.question.body}
export default Question;
import React from 'react';
import ReactDOM from 'react-dom';
import AnswerList from './AnswerList.jsx'
import AddAnswerModal from './AddAnswerModal.jsx'
import AddAnswer from './AddAnswer.jsx'

const Question = (props) => {
  return(
  <div className="qa-question">
    <div>
      <div className="qa-question-body" >Q: {props.question.question_body}
        <div className="qa-divider"/>
        <div className="qa-divider"/>
        <div className="qa-question-buttons">
          <button className="qa-helpful-button" onClick={() => props.onClickHelpful(props.question)}> Helpful? <u>Yes</u> ({props.question.question_helpfulness})</button> {'|'}
          <AddAnswer setAddAModalShow={props.setAddAModalShow} q={props.question}/>
          <AddAnswerModal show={props.show} onClose={() => props.setAddAModalShow(false)} addAnswer={props.addAnswer} modalQ={props.modalQ}/>

        </div>
      </div>
    </div>
    <div className="qa-answer">
      <div><AnswerList answers={props.question.answers} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported}onReportAnswer={props.onReportAnswer}/></div>
    </div>
  </div>
  )
}
// {props.question.body}
export default Question;
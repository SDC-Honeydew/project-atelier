import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
import Search from './Search.jsx';

const QuestionList = (props) => {
  if(props.questionList.length < 1) {
    return(null)
  }
  if (!props.moreQuestions) {
    return(
      <div className="question-list">
        <Question question={props.questionList[0]} onClickHelpful={props.onClickHelpful} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported} setAddAModalShow={props.setAddAModalShow} show={props.show} onReportAnswer={props.onReportAnswer} addQuestion={props.addQuestion} addAnswer={props.addAnswer} modalQ={props.modalQ}/>
        <Question question={props.questionList[1]} onClickHelpful={props.onClickHelpful} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported} setAddAModalShow={props.setAddAModalShow} show={props.show} addQuestion={props.addQuestion} addAnswer={props.addAnswer} onReportAnswer={props.onReportAnswer}modalQ={props.modalQ}/>
      </div>
    )
  }
  if(props.moreQuestions) {
    return(
      <div className="question-list">
        {props.questionList.map((question, key) => {
          return <Question question={question} key={key} onClickHelpful={props.onClickHelpful} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported} setAddAModalShow={props.setAddAModalShow} show={props.show} addQuestion={props.addQuestion} addAnswer={props.addAnswer} onReportAnswer={props.onReportAnswer}modalQ={props.modalQ}/>
        })}
      </div>
    )
  }

}

export default QuestionList
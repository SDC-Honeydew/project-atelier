import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
import Search from './Search.jsx';

const QuestionList = (props) => {
  console.log('inLISTTOP', props.questionList[0], props.questionList[1])
  if(props.questionList.length < 1) {
    return(null)
  }
  if (!props.moreQuestions) {
    return(
      <div className="question-list">
        <Question question={props.questionList[0]} onClickHelpful={props.onClickHelpful} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported} setAddAModalShow={props.setAddAModalShow} show={props.show}/>
        <Question question={props.questionList[1]} onClickHelpful={props.onClickHelpful} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported} setAddAModalShow={props.setAddAModalShow} show={props.show} addQuestion={props.addAnswer}/>
      </div>
    )
  }
  if(props.moreQuestions) {
    console.log('more = true')
    return(
      <div className="question-list">
        {props.questionList.map((question, key) => {
          return <Question question={question} key={key} onClickHelpful={props.onClickHelpful} onClickHelpfulA={props.onClickHelpfulA} reported={props.reported} setAddAModalShow={props.setAddAModalShow} show={props.show} addQuestion={props.addAnswer}/>
        })}
      </div>
    )
  }

}

export default QuestionList
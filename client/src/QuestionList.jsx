import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
import Search from './Search.jsx';

const QuestionList = (props) => {
  console.log('inLISTTOP', props.questionList)
  if(props.questionList.length < 1) {
    return(null)
  }
  if (!props.moreQuestions) {
    console.log('more = false')
    return(
    <div className="question-list">
      {console.log('inLIST expecting:', props.questionList[0])}
      {console.log('inLIST', Object.values(props.questionList[0].answers))}
        <Question question={props.questionList[0]} onClickHelpful={props.onClickHelpful}/>
        <Question question={props.questionList[1]} onClickHelpful={props.onClickHelpful}/>
        <Question question={props.questionList[2]} onClickHelpful={props.onClickHelpful}/>
        <Question question={props.questionList[3]} onClickHelpful={props.onClickHelpful}/>
    </div>
    )
  }
  if(props.moreQuestions) {
    console.log('more = true')
    return(
      <div className="question-list">
        {props.questionList.map(question => {
          {console.log('one')}
          return <Question question={question} onClickHelpful={props.onClickHelpful}/>
          })}
      </div>
    )
  }

}

export default QuestionList
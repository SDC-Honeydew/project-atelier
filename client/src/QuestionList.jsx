import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
import Search from './Search.jsx';

const QuestionList = (props) => (

  <div className="question-list">
      <Question question={sortedQuestions[0]} />
      <Question question={sortedQuestions[1]} />
  </div>
)

export default QuestionList
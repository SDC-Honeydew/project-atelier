import React from 'react';
import ReactDOM from 'react-dom';

const Answer = (props) => {

  if(props.answer === undefined) {
    return null
  }

  return(

  <div>
    <div>
      {console.log('in Answer:', props.answer)}
      {props.answer.body}

    </div>
    <div>
      by {props.answer.answerer_name}, {new Date(props.answer.date).toDateString()} {'|'} {'Helpful'}

    </div>

  </div>
)
  }

export default Answer
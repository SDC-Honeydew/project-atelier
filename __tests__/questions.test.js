import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import QuestionApp from '../client/src/questions/QuestionApp.jsx';
import Search from '../client/src/questions/Search.jsx';
import MoreQuestions from '../client/src/questions/MoreQuestions.jsx';
import AddAnswer from '../client/src/questions/AddAnswer.jsx';
import AddQuestion from '../client/src/questions/AddQuestion.jsx';
import Question from '../client/src/questions/Question.jsx';
import QuestionList from '../client/src/questions/QuestionList.jsx';
import AnswerList from '../client/src/questions/AnswerList.jsx';
import Answer from '../client/src/questions/Answer.jsx';
import AddQuestionModal from '../client/src/questions/AddQuestionModal.jsx';
import AddAnswerModal from '../client/src/questions/AddAnswerModal.jsx';

afterEach(cleanup);

var mockQuestionList = [
  {
      "question_id": 153662,
      "question_body": "How long does it last?",
      "question_date": "2019-07-06T00:00:00.000Z",
      "asker_name": "funnygirl",
      "question_helpfulness": 17,
      "reported": false,
      "answers": [ {
              "id": 1444607,
              "body": "Showing no wear after a few months!",
              "date": "2019-09-06T00:00:00.000Z",
              "answerer_name": "sillyguy",
              "helpfulness": 13,
              "photos": []
          },
          {
              "id": 1992176,
              "body": "Not long enough apparently",
              "date": "2021-06-24T00:00:00.000Z",
              "answerer_name": "Big Boi",
              "helpfulness": 0,
              "photos": []
          }]
      },
  {
      "question_id": 153659,
      "question_body": "What fabric is the top made of?",
      "question_date": "2018-01-04T00:00:00.000Z",
      "asker_name": "yankeelover",
      "question_helpfulness": 6,
      "reported": false,
      "answers": [
          {
              "id": 1444523,
              "body": "Something pretty soft but I can't be sure",
              "date": "2018-01-04T00:00:00.000Z",
              "answerer_name": "metslover",
              "helpfulness": 8,
              "photos": [
                  "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                  "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                  "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
              ]
          },
          {
              "id": 1444525,
              "body": "Its the best! Seriously magic fabric",
              "date": "2018-01-04T00:00:00.000Z",
              "answerer_name": "metslover",
              "helpfulness": 8,
              "photos": []
          },
          {
              "id": 1444526,
              "body": "DONT BUY IT! It's bad for the environment",
              "date": "2018-01-04T00:00:00.000Z",
              "answerer_name": "metslover",
              "helpfulness": 10,
              "photos": []
          },
          {
              "id": 1444575,
              "body": "Suede",
              "date": "2018-11-04T00:00:00.000Z",
              "answerer_name": "metslover",
              "helpfulness": 12,
              "photos": []
          },
          {
              "id": 1992171,
              "body": "This is not about the product on this page, but check out these Js!",
              "date": "2021-06-23T00:00:00.000Z",
              "answerer_name": "The King",
              "helpfulness": 0,
              "photos": [
                  "blob:http://localhost:3000/ccd6eeae-fb0d-4090-ae1c-9c1e60f55a40",
                  "blob:http://localhost:3000/58e6f68f-5c96-4744-aa44-eee11f340f2f",
                  "blob:http://localhost:3000/691934c4-5611-4821-9cb3-8e9c3b068208",
                  "blob:http://localhost:3000/be153104-6786-48d3-8ae8-ba90e3e79a2b",
                  "blob:http://localhost:3000/9f6a5018-4603-4153-9a55-7d5c59fb8c4e"
              ]
          }
      ]}
  ,
  {
      "question_id": 213124,
      "question_body": "What are the wash and care instructions?",
      "question_date": "2021-06-23T00:00:00.000Z",
      "asker_name": "girl123",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
  },
  {
      "question_id": 213125,
      "question_body": "The top is made of suede",
      "question_date": "2021-06-23T00:00:00.000Z",
      "asker_name": "girl123",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
  },
  {
      "question_id": 213123,
      "question_body": "Does this top run big or small?",
      "question_date": "2021-06-23T00:00:00.000Z",
      "asker_name": "girl123",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
  },
  {
      "question_id": 212819,
      "question_body": "What is the history of the usage of camo prints in the fashion industry?",
      "question_date": "2021-06-16T00:00:00.000Z",
      "asker_name": "curious",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
  },
  {
      "question_id": 212399,
      "question_body": "Is it from France?",
      "question_date": "2021-06-09T00:00:00.000Z",
      "asker_name": "r00dy",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
  }
];

describe('Questions and Answers App', () => {
  test('it renders', () => {
    render(<QuestionApp />);
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });

});


describe('Search Component', () => {
  test('it renders', () => {
    render(<Search />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  // test('Search for term long', () => {
  //   var term = 'long';
  //   render(<Search />);
  //   expect().toEqual();
  // });
});

describe('More Questions', () => {
  test('it renders', () => {
    render(<MoreQuestions />);
    expect(screen.getByText('More Answered Questions')).toBeInTheDocument();
  });


});
describe('Add Answer', () => {
  test('it renders', () => {
    render(<AddAnswer />);
    expect(screen.getByText('Add Answer')).toBeInTheDocument();
  });

});
describe('Add Question', () => {
  test('it renders', () => {
    render(<AddQuestion />);
    var questClass = document.getElementsByClassName('qa-ma-button')
    expect(questClass.length).toEqual(1);
  });

});
describe('Question List', () => {
  test('it renders', () => {

    render(<QuestionList questionList={mockQuestionList}/>);
    var questions = document.getElementsByClassName('qa-question')
    expect(questions.length).toEqual(2);
  });

});

describe('Question', () => {
  test('it renders', () => {

    render(<Question question={mockQuestionList[0]}/>);
    var questions = document.getElementsByClassName('qa-question-body')
    expect(questions.length).toEqual(1);
  });

});
describe('Answer List', () => {
  test('it renders', () => {

    render(<AnswerList answers={mockQuestionList[0].answers}/>);
    var answerss = document.getElementsByClassName('qa-answer-list')
    expect(answerss.length).toEqual(1);
  });

});
describe('Answer', () => {
  test('it renders', () => {

    render(<Answer answer={mockQuestionList[0].answers[0]}/>);

    var answersBody = document.getElementsByClassName('qa-answer-user')
    expect(answersBody.length).toEqual(1);
  });

});
describe('Add Question Modal', () => {
  test('it renders', () => {

    render(<AddQuestionModal show={true}/>);

    var modalBody = document.getElementsByClassName('qa-modal')
    expect(modalBody.length).toEqual(1);
  });

});

describe('Add Answer Modal', () => {
  test('it renders', () => {

    render(<AddAnswerModal show={true}/>);

    var modalBody = document.getElementsByClassName('qa-modal')
    expect(modalBody.length).toEqual(1);
  });

});
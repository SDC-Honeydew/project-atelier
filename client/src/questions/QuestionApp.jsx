import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import MoreQuestions from './MoreQuestions.jsx'
import AddQuestion from './AddQuestion.jsx'
import TOKEN from '../../../config.js'
import getQuestions from '../../../APIrequests/getQuestions.js'
import getAnswers from '../../../APIrequests/getAnswers.js'
import markQuestionHelpful from '../../../APIrequests/markQuestionHelpful.js'
import markAnswerHelpful from '../../../APIrequests/markAnswerHelpful.js'


class QuestionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questionList: [],
      page: 1,
      count: 5,
      moreQuestions: false,
      voteQ: [],
      voteA: [],
      reported: false
    }
    this.getProductQuestions = this.getProductQuestions.bind(this)
    this.getAnswersToQuestion = this.getAnswersToQuestion.bind(this)
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this)
    this.onClickHelpful = this.onClickHelpful.bind(this)
    this.onClickHelpfulA = this.onClickHelpfulA.bind(this)
  }

  filter(term) {

  }

  componentDidMount() {
    this.getProductQuestions()
  }

  getProductQuestions() {
    return getQuestions(this.props.product_id, this.state.page, this.state.count)
    .then(result => {
      return result.data.results.sort((a,b) => {
        return b.question_helpfulness - a.question_helpfulness
      })
    })
    .then(sortedQs => {
      return sortedQs.map(questionObj => {
        var answerArr = Object.values(questionObj.answers)
        var sortedAns = answerArr.sort((a,b) => {
          return b.helpfulness - a.helpfulness
        })
        questionObj["answers"] = sortedAns
        return questionObj
      })
    })
    .then(quests => {
      return this.setState({
        questionList: quests
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  getAnswersToQuestion(questionID) {
    return getAnswers(questionID, this.state.page, this.state.count)
    .then(result => {
      return result.data.results.sort((a,b) => {
        return b.helpfulness - a.helpfulness
      })
    }).then(result => {
      return result
    }).catch(err => {
      console.log(err)
    })
  }

  handleMoreQuestions() {
      this.setState({
        moreQuestions: true
      })
  }

  onClickHelpful(q) {
    let foundQ = this.state.voteQ.find(element => element === q.question_id)
    if(!foundQ)
      return markQuestionHelpful(q.question_id)
      .then(result => {
        return this.getProductQuestions()
      })
      .then(result => {
        var joined = this.state.voteQ.concat(q.question_id);
        this.setState({ voteQ: joined })
      })
  }
  onClickHelpfulA(a) {
    let foundA = this.state.voteA.find(element => element === a.id)
    if(!foundA)
      return markAnswerHelpful(a.id)
      .then(result => {
        return this.getProductQuestions()
      })
      .then(result => {
        var joined = this.state.voteA.concat(a.id);
        this.setState({ voteA: joined })
      })
  }


  render () {
    return (
      <div>
        <h1> QUESTIONS & ANSWERS </h1>
        <nav className="qa-navbar">
          <div>
            <Search search={this.search}/>
          </div>
        </nav>
        <div>
          <QuestionList questionList={this.state.questionList} product_id={this.props.product_id} moreQuestions={this.state.moreQuestions} onClickHelpful={this.onClickHelpful} onClickHelpfulA={this.onClickHelpfulA}/>
        </div>
        <div>
          <MoreQuestions questionList={this.state.questionList} onClick={this.handleMoreQuestions}/>
        </div>

        <div>
          <AddQuestion />
        </div>
      </div>
    )
  }
}

export default QuestionApp;
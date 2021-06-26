import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import MoreQuestions from './MoreQuestions.jsx'
import AddQuestion from './AddQuestion.jsx'
import AddQuestionModal from './AddQuestionModal.jsx'
import TOKEN from '../../../config.js'
import getQuestions from '../../../APIrequests/getQuestions.js'
import getAnswers from '../../../APIrequests/getAnswers.js'
import markQuestionHelpful from '../../../APIrequests/markQuestionHelpful.js'
import markAnswerHelpful from '../../../APIrequests/markAnswerHelpful.js'
import postQuestion from '../../../APIrequests/postQuestion.js'
import postAnswer from '../../../APIrequests/postAnswer.js'
import answerReported from '../../../APIrequests/reportAnswer.js'

class QuestionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questionList: [],
      page: 1,
      count: 50,
      moreQuestions: false,
      voteQ: [],
      voteA: [],
      reported: [],
      addQModalShow: false,
      addAModalShow: false,
      productName: this.props.name,
      numQuestionsDisplayed: 2,
      questionListLength: 0,
      displayedQuestionList: []
    }
    this.getProductQuestions = this.getProductQuestions.bind(this)
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this)
    this.onClickHelpful = this.onClickHelpful.bind(this)
    this.onClickHelpfulA = this.onClickHelpfulA.bind(this)
    this.searchFilter = this.searchFilter.bind(this)
    this.setAddQModalShow = this.setAddQModalShow.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.setAddAModalShow = this.setAddAModalShow.bind(this)
    this.reportAnswer = this.reportAnswer.bind(this)
  }

  searchFilter(searchTerm) {
    if(searchTerm === 'clear') {
      this.getProductQuestions()
    }
    var filtered = this.state.questionList.filter(question => {
      return question.question_body.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({questionList: filtered})
  }

  componentDidMount() {
    this.getProductQuestions()
  }

  getProductQuestions() {
    var id = this.props.product_id
    return getQuestions(id, this.state.page, this.state.count)
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
      var qlength = Object.keys(quests).length
      return this.setState({
        questionList: quests,
        questionListLength: qlength
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  handleMoreQuestions() {
      var questNum = this.state.numQuestionsDisplayed + 2
      this.setState({
        moreQuestions: true,
        numQuestionsDisplayed: questNum
      })
      var slicedQList = this.state.questionList.slice(0, this.state.numQuestionsDisplayed)
      this.setState({
        displayedQuestionList: slicedQList
      })
  }
  addQuestion(body, name, email, photos, questionID) {
    var data = {body: body, name: name, email: email, photos: photos}
    return postAnswer(data, questionID)
    .then(result => {
      this.getProductQuestions()
    })
    .catch(err => {
      console.log(err)
    })
  }

  addAnswer(body, name, email) {
    var data = {body: body, name: name, email: email, product_id: parseInt(this.props.product_id)}
    return postQuestion(data)
    .then(result => {
      this.getProductQuestions()
    })
    .catch(err => {
      console.log(err)
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
  reportAnswer(answer) {
    console.log('in REPORTED', answer)
    let foundReportedAnswer = this.state.reported.find(element => element === answer.id)
    if(!foundReportedAnswer){
      return answerReported(answer.id)
      .then(result => {
        var joined = this.state.reported.concat(answer.id);
        this.setState({ reported : joined })
      })
    }
  }
  setAddQModalShow (boolean) {
    this.setState({
      addQModalShow: boolean
    })
  }
  setAddAModalShow (boo) {
    this.setState({
      addAModalShow: boo
    })
  }
  render () {
    return (
      <div>
        <h1 className="qa-header"> QUESTIONS & ANSWERS </h1>
        <nav className="qa-navbar">
          <Search searchFilter={this.searchFilter}/>
        </nav>
        <div>
          <QuestionList questionList={this.state.questionList} product_id={this.props.product_id} moreQuestions={this.state.moreQuestions} displayedQuestions={this.state.displayedQuestionList} onClickHelpful={this.onClickHelpful} onClickHelpfulA={this.onClickHelpfulA} reported={this.state.reported} setAddAModalShow={this.setAddAModalShow} show={this.state.addAModalShow} addAnswer={this.addAnswer} reportAnswer={this.reportAnswer}/>
        </div>
        <div className="qa-footer">
            <MoreQuestions questionList={this.state.questionList} onClick={this.handleMoreQuestions} displayedQuestions={this.state.numQuestionsDisplayed} length={this.state.questionListLength}/>
            <div className="qa-divider"/>
            <AddQuestion setAddQModalShow={this.setAddQModalShow} show={this.state.addQModalShow} addQuestion={this.addQuestion}/>
        </div>
        <AddQuestionModal show={this.state.addQModalShow} onClose={() => this.setAddQModalShow(false)} addQuestion={this.addQuestion} name={this.state.productName}/>
      </div>
    )
  }
}

export default QuestionApp;
import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import MoreQuestions from './MoreQuestions.jsx'
import AddQuestion from './AddQuestion.jsx'
import AddQuestionModal from './AddQuestionModal.jsx'
import $ from 'jquery';
import trackClicks from '../tracking/trackClicks.jsx'

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
      displayedQuestionList: [],
      answerModalQuestion: ''
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
    this.onReportAnswer = this.onReportAnswer.bind(this)
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
    // return getQuestions(id, this.state.page, this.state.count)
    $.ajax({
      method: 'GET',
      url: '/qa/questions',
      data: { id: this.props.product_id, page: this.state.page, count: this.state.count},
      dataType: 'json'
    })
    .then(result => {
      return result.results.sort((a,b) => {
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
  addAnswer(body, name, email, questionID, callback) {
    var data = {body: body, name: name, email: email, questionID: questionID}

    $.ajax({
      method: 'POST',
      url: '/qa/questions/answers',
      data: data
    })
    .then(result => {
      this.getProductQuestions()
      callback()
    })
    .catch(err => {
      console.log(err)
    })
  }

  addQuestion(body, name, email, callback) {
    var data = {body: body, name: name, email: email, product_id: parseInt(this.props.product_id)}
    console.log('before ajax call to add Q')
    $.ajax({
      method: 'POST',
      url: '/qa/questions',
      data: data
    })
    .then(result => {
      this.getProductQuestions()
      callback()
    })
    .catch(err => {
      console.log(err, 'err in post q')
    })
  }

  onClickHelpful(q) {
    let foundQ = this.state.voteQ.find(element => element === q.question_id)

    if(!foundQ) {
      $.ajax({
        method: 'PUT',
        url: '/qa/questions/helpful',
        data: { id: q.question_id },
        dataType: 'json'
      })
      .then(result => {
        return this.getProductQuestions()
      })
      .then(result => {
        var joined = this.state.voteQ.concat(q.question_id);
        this.setState({ voteQ: joined })
      })
    }
  }
  onClickHelpfulA(a) {
    let foundA = this.state.voteA.find(element => element === a.id)
    if(!foundA) {
      $.ajax({
      method: 'PUT',
      url: '/qa/answers/helpful',
      data: { id: a.id},
      dataType: 'json'
    })
      .then(result => {
        return this.getProductQuestions()
      })
      .then(result => {
        var joined = this.state.voteA.concat(a.id);
        this.setState({ voteA: joined })
      })
  }}
  onReportAnswer(answer) {
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
  setAddAModalShow (boo, q) {
    this.setState({
      addAModalShow: boo,
      answerModalQuestion: q
    })
  }

  render () {
    return (
      <div onClick={(e) => this.props.logged(e)}>
        <h1 className="qa-header"> QUESTIONS & ANSWERS </h1>
        <nav className="qa-navbar">
          <Search searchFilter={this.searchFilter}/>
        </nav>
        <div>
          <QuestionList questionList={this.state.questionList} product_id={this.props.product_id} moreQuestions={this.state.moreQuestions} displayedQuestions={this.state.displayedQuestionList} onClickHelpful={this.onClickHelpful} onClickHelpfulA={this.onClickHelpfulA} reported={this.state.reported} setAddAModalShow={this.setAddAModalShow} show={this.state.addAModalShow} addAnswer={this.addAnswer} onReportAnswer={this.onReportAnswer} modalQ={this.state.answerModalQuestion}/>
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

export default trackClicks(QuestionApp);
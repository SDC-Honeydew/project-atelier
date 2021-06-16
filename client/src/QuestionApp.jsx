import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import MoreQuestions from './MoreQuestions.jsx'
import AddQuestion from './AddQuestion.jsx'
import TOKEN from '../../config.js'
import getQuestions from '../../APIrequests/getQuestions.js'
import getAnswers from '../../APIrequests/getAnswers.js'


class QuestionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questionList: [],
      page: 1,
      count: 5,
      moreQuestions: false,
      voteQ: 0,
      voteA: 0,
      reported: false
    }
    this.getProductQuestions = this.getProductQuestions.bind(this)
    this.getAnswersToQuestion = this.getAnswersToQuestion.bind(this)
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this)
    this.onClickHelpful = this.onClickHelpful.bind(this)
  }

  filter(term) {

  }

  componentDidMount() {
    this.getProductQuestions()
  }

  getProductQuestions() {
    console.log(this.props.product_id, 'prod id')

    return getQuestions(this.props.product_id, this.state.page, this.state.count)
    .then(result => {
      console.log('here')
      console.log('in getQuestions.then')
      return result.data.results.sort((a,b) => {
        return b.question_helpfulness - a.question_helpfulness
      })
    })
    .then(sortedQs => {
      console.log('SQ', sortedQs[0].answers)
      console.log('SQ', sortedQs[0])


      return sortedQs.map(questionObj => {
        var answerArr = Object.values(questionObj.answers)
        var sortedAns = answerArr.sort((a,b) => {
          return b.helpfulness - a.helpfulness
        })
        questionObj["answers"] = sortedAns

        // var promise = this.getAnswersToQuestion(questionObj.question_id)
        // Promise.all([promise]).then(answers => {
        //   console.log('answers:', answers)
        //   questionObj["answers"] = answers

        // })
        return questionObj
      })


    })
    .then(quests => {
      console.log("in quests")
      return this.setState({
        questionList: quests
      })
    })
    .catch(err => {
      console.log(err)
    })
    console.log('here;', sortedQuestions)

  }

  getAnswersToQuestion(questionID) {
    return getAnswers(questionID, this.state.page, this.state.count)
    .then(result => {
      return result.data.results.sort((a,b) => {
        return b.helpfulness - a.helpfulness
      })
    }).then(result => {
      console.log('done in getAnswers', result)
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
  onClickHelpful(q, type) {
    var updateHelper = function(arr, item) {
      if(type === 'question') {
        let foundEl = arr.find(element => element.question_body === item.question_body)
        foundEl.question_helpfulness = foundEl.question_helpfulness + 1
      }
      if(type === 'answer') {
        let foundEl = arr.answers.find(element => element.answers.body === item.body)
        foundEl.question_helpfulness = foundEl.question_helpfulness + 1
      }
      return arr
    }
    if(this.state.voteQ < 1) {
      var retArr = updateHelper(this.state.questionList, q)
    }

    this.setState({
      list: retArr,
      voteQ: 1
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
          <QuestionList questionList={this.state.questionList} product_id={this.props.product_id} moreQuestions={this.state.moreQuestions} onClickHelpful={this.onClickHelpful}/>
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
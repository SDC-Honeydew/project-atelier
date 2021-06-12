import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import MoreQuestions from './MoreQuestions.jsx'
import AddQuestion from './AddQuestion.jsx'
import TOKEN from '../../config.js'
import getQuestions from '../../serverHelper.js'


class QuestionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questionList: [],
      page: 1,
      count: 5
    }
  }

  filter (term) {

  }

  componentDidMount() {
    this.getProductQuestions()
  }

  getProductQuestions() {
    getQuestions(this.props.product_id, this.state.page, this.state.count, (result) => {
      var sortedQuestions = result.results.sort((a,b) => {
        return a.question_helpfulness - b.question_helpfulness
      })
      // var desc = (a,b) => {
      //   return a.question_helpfulness - b.question_helpfulness
      // }

      // var sortedQuestions = props.questionList.sort(desc)
      this.setState({
        questionList: sortedQuestions
      });
    });
  }


  render () {
    return (
      <div>
        <h1> QUESTIONS & ANSWERS </h1>
        <nav className="navbar">
          <div>
            <Search search={this.search}/>
          </div>
        </nav>
        <div>
          <QuestionList questionList={this.state.questionList} product_id={this.props.product_id}/>
        </div>
        <div>
          <MoreQuestions />
        </div>

        <div>
          <AddQuestion />
        </div>
      </div>
    )
  }
}

export default QuestionApp;
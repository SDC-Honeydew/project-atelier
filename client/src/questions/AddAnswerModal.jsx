import React from 'react';
import ReactDOM from 'react-dom';

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qaanswer: '',
      qanickname: '',
      qaemail: ''
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleSubmitAnswer=this.handleSubmitAnswer.bind(this)
  }
  handleInputChange(event) {
    console.log(event.target)
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmitAnswer() {
    event.preventDefault()
    console.log('in submit answer', this.props.q)
    if((this.state.qaanswer.length < 1) || (this.state.qanickname.length < 1) || (this.state.qaemail.length < 1) || (!this.state.qaemail.includes("@"))) {
      window.alert('You must enter all mandatory fields')
    } else {
      this.props.addAnswer(this.state.qaanswer, this.state.qanickname, this.state.qaemail, this.props.modalQ.question_id, () =>{
        this.props.onClose();
      })
      // .then(result => {
      // })
    }

  }
  render () {
    if(!this.props.show) {
      return null
    }

    return (
    <div className="qa-modal" onClick={this.props.onClose}>
      <div className="qa-modal-content" onClick={e => e.stopPropagation()}>
        <div className="qa-modal-header">
          <h4 className="qa-modal-title">Submit Your Answer</h4>
          <h5 className="qa-modal-subtitle">{this.props.name} : {this.props.modalQ.question_body}</h5>
        </div>
        <div className="qa-modal-body">
          <label>
            <span>Your Answer: *   </span>
            <textarea maxLength="1000" name="qaanswer" placeholder="Example: Why did you like the product or not?" rows="4" cols="50" value={this.state.qaanswer} onChange={this.handleInputChange}/>
          </label>
          <label>
            <span>What is your nickname? *   </span>
            <input name="qanickname" placeholder="Example: jackson11!" value={this.state.qanickname} onChange={this.handleInputChange}/>
          </label>
          <br></br>
            For privacy reasons, do not use your full name or email address
          <label>
            <span>Your email: *   </span>
            <input name="qaemail" value={this.state.qaemail} onChange={this.handleInputChange}/>
          </label>
          <br></br>
            For authentication reasons, you will not be emailed
        </div>
        <div className="qa-modal-footer">
          <button className="qa-button" onClick={this.props.onClose}>Close</button>
          <button className="qa-button" onClick={this.handleSubmitAnswer}>Submit Answer </button>
        </div>
      </div>
    </div>
    )};
}

export default AddAnswerModal
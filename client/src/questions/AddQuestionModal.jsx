import React from 'react';
import ReactDOM from 'react-dom';

class AddQuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qaquestion: '',
      qanickname: '',
      qaemail: ''
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleSubmitQuestion=this.handleSubmitQuestion.bind(this)
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmitQuestion() {
    event.preventDefault()
    if((this.state.qaquestion.length < 1) || (this.state.qanickname.length < 1) || (this.state.qaemail.length < 1) || (!this.state.qaemail.includes("@"))) {
      window.alert('You must enter all mandatory fields')
    } else {
      return this.props.addQuestion(this.state.qaquestion, this.state.qanickname, this.state.qaemail, ()=> {
        this.props.onClose();
      })
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
          <h4 className="qa-modal-title">Ask Your Question</h4>
          <h5 className="qa-modal-subtitle">About the {this.props.name}</h5>
        </div>
        <div className="qa-modal-body">
          <label>
            <span>Your Question: *   </span>
            <textarea maxLength="1000" name="qaquestion" placeholder="Example: Why did you like the product or not?" rows="4" cols="50" value={this.state.qaquestion} onChange={this.handleInputChange}/>
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
          <button className="qa-button" onClick={this.handleSubmitQuestion}>Submit Question </button>
        </div>
      </div>
    </div>
    )};
}

export default AddQuestionModal
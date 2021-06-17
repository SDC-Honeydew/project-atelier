import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
    if(this.state.term.length > 2) {
      this.props.filter(this.state.term)
    }
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
    <div>
      <input
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={this.state.terms}
        onChange={this.onChange}/>
      <button onClick={this.search}> Search </button>
    </div>)
  }
}

export default Search;
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      searchTerm: e.target.value
    });
    if(this.state.searchTerm.length > 2) {
      this.props.searchFilter(this.state.searchTerm)
    } else if(this.state.searchTerm.length < 2) {
      this.props.searchFilter('clear')
    }
  }

  render() {
    return (
    <div className="qa-search">
      <input
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={this.state.terms}
        onChange={this.onChange}
        className="qa-search-input"/>
      <button className="qa-search-button" onClick={this.search}> Search </button>
    </div>)
  }
}

export default Search;
import React from 'react';
import ReactDOM from 'react-dom';
// import relatedProducts from './related/relatedProducts.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <h1 id='test'>Hello World!</h1>
      <relatedProducts/>
    )
  }
}

export default App;


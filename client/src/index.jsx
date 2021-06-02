import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={}
  }

  testToken() {
    axios.get('/test', (req, res) => {
      console.log('test clicked')
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      <button onClick={() => this.testToken()}>Test</button>

      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
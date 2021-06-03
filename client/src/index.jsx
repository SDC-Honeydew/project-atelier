import ReactDOM from 'react-dom';
<<<<<<< HEAD
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
=======
import React from 'react';
import App from './App.jsx';

>>>>>>> fedfd4ff51101763bbc905aa75b48d3b211102aa

ReactDOM.render(<App />, document.getElementById('app'));
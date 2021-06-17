import ReactDOM from 'react-dom';
import React from 'react';
import App from './app.jsx';
import QuestionApp from './questions/QuestionApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';




// ReactDOM.render(<App />, document.getElementById('app'))


ReactDOM.render(<QuestionApp product_id={'22122'}/>, document.getElementById('app'))



// ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

<<<<<<< HEAD
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 22168
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(newItem) {
    this.setState({
      item: newItem
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ProductOverview />
        <RelatedProducts item={this.state.item} handleCardClick={this.handleCardClick}/>
        <Review />
      </div>
    );
  }
}

export default App;
=======
import Home from './home.jsx';
>>>>>>> c46236d9e0a223d1c26cd0c16e01b6da24c58440

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
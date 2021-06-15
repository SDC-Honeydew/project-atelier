import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import Review from './review/review.jsx';
import ProductOverview from './overview/overview.jsx';

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
        <h1 id='test'>Hello World!</h1>
        <ProductOverview />
        <RelatedProducts item={this.state.item} handleCardClick={this.handleCardClick}/>
        <Review />
      </div>
    );
  }
}

export default App;


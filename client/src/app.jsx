import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import Review from './review/review.jsx';
import ProductOverview from './overview/overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD

    };
=======
      item: 22168
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(newItem) {
    this.setState({
      item: newItem
    });
>>>>>>> 86a41fa0f6b6b0c927d054e73942f8466869bd88
  }

  render() {
    return (
      <div>
        <ProductOverview />
        <RelatedProducts item={this.state.item} handleCardClick={this.handleCardClick}/>
        <Review />
      </div>
    );
  }
}

export default App;


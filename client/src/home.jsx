import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import Review from './review/review.jsx';
import ProductOverview from './overview/overview.jsx';
import $ from 'jquery';
class Home extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    const id = params.get('product');
    this.state = { id };
  }

  render() {
    return (
      <div>
        <h1 id='test'>Hello World!</h1>
        <ProductOverview />
        <RelatedProducts />
        <Review id={this.state.id} />
      </div>
    );
  }
}

export default Home;


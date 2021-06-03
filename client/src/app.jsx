import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import ProductOverview from './overview/overview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <h1 id='test'>Hello World!</h1>
      <ProductOverview />
      <RelatedProducts/>
      </div>
    )
  }
}

export default App;


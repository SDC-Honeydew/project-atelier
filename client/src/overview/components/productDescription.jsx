import React from 'react';

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='product-description'>
        <h5>{this.props.slogan}</h5>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ProductDescription;
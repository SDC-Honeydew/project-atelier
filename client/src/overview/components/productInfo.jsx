import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='product-info'>This will show product info!</div>
    );
  }
}

export default ProductInformation;
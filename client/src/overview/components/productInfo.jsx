import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='product-info'>
        <p>{this.props.data.category}</p>
        <p>{this.props.data.name}</p>
      </div>
    );
  }
}

export default ProductInformation;
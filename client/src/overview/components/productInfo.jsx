import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='product-info'>
        <div>**Stars will go here**</div>
        <p>{this.props.category}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default ProductInformation;
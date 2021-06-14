import React from 'react';
import StarRating from '../../review/starRating.jsx';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='product-info'>
        <StarRating rating={2.5} />
        <h3>{this.props.category}</h3>
        <h1>{this.props.name}</h1>
        <h2>{`$${this.props.price}`}</h2>
      </div>
    );
  }
}

export default ProductInformation;
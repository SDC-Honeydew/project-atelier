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
        <p>{this.props.category}</p>
        <p>{this.props.name}</p>
        <p>{`$${this.props.price}`}</p>
      </div>
    );
  }
}

export default ProductInformation;
import React from 'react';
import StarRating from '../../review/starRating.jsx';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var price;

    if (this.props.price.sale_price) {
      price =
        <div className='overview-productInfo-priceContainer'>
          <h2 className='overview-productInfo-sale-ogPrice'>{`$${this.props.price.original_price}`}</h2>
          <h2 className='overview-productInfo-sale-salePrice'>{`$${this.props.price.sale_price}`}</h2>
        </div>
    } else {
      price =
        <h2 className='overview-productInfo-ogPrice'>{`$${this.props.price.original_price}`}</h2>
    }
    return (
      <div data-testid='product-info'>
        <StarRating rating={2.5} />
        <h3>{this.props.category}</h3>
        <h1>{this.props.name}</h1>
        {price}
      </div>
    );
  }
}

export default ProductInformation;
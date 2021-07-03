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
          <p className='overview-productInfo-sale-ogPrice'>{`$${this.props.price.original_price}`}</p>
          <p className='overview-productInfo-sale-salePrice'>{`$${this.props.price.sale_price}`}</p>
        </div>;
    } else {
      price =
        <p className='overview-productInfo-ogPrice'>{`$${this.props.price.original_price}`}</p>;
    }
    return (
      <div data-testid='product-info'>
        <StarRating rating={2.5} />
        <span className='overview-productInfo-category'>{this.props.category}</span>
        <h2 className='overview-productInfo-name'>{this.props.name}</h2>
        {price}
        <div className='overview-social-media'>
          <a href='#' className='fa fa-facebook'></a>
          <a href='#' className='fa fa-twitter'></a>
          <a href='#' className='fa fa-pinterest'></a>
        </div>
      </div>
    );
  }
}

export default ProductInformation;
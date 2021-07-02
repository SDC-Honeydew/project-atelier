import React from 'react';
import StarRating from '../review/starRating.jsx';
import SalePrice from './salePrice.jsx';


class ProductCard extends React.Component {

  render() {
    var iconText, imgAlt;
    if (this.props.cardType === 'related') {
      iconText = '★';
    } else {
      iconText = 'x';
    }
    imgAlt = `${this.props.productInfo.category}: ${this.props.productInfo.name}`;
    return (
      <div className="related_productCard">
        <img className='related_productCardImage' src={this.props.productInfo.image || 'https://static.thenounproject.com/png/1103191-200.png'} alt={imgAlt} onClick={(event) => {
          event.preventDefault();
          this.props.handleCardClick(this.props.productInfo.id);
        }}></img>
        <p className='related_icon' onClick={() => {
          var productClicked = {
            name: this.props.productInfo.name,
            id: this.props.productInfo.id,
            features: this.props.productInfo.features
          };
          this.props.onIconClick(productClicked);
        }}>{iconText}</p>
        <div className='related_details' onClick={(event) => {
          event.preventDefault();
          this.props.handleCardClick(this.props.productInfo.id);
        }}>
          <p>{this.props.productInfo.category}</p>
          <p>{this.props.productInfo.name}</p>
          <SalePrice original_price={this.props.productInfo.original_price} sale_price={this.props.productInfo.sale_price} />
          <StarRating rating={this.props.productInfo.avgReview} />
        </div>
      </div>
    );
  }
}

export default ProductCard;
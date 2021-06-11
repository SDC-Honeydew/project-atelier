import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from '../review/starRating.jsx';

class SalePrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var jsx;
    if (this.props.sale_price === null) {
      jsx = (
        <p className='related_details'>${this.props.original_price}</p>
      );
    } else {
      jsx = (
        <React.Fragment>
          <span className='related_sale'>${this.props.sale_price}</span><span>${this.props.productInfo.original_price}</span>
        </React.Fragment>
      );
      return jsx;
    }
  }
}

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    //cardType
    //productInfo
    //onClick
    this.state = {
    };
  }

  render() {
    return (
      <div className="related_productCard">
        <img className='related_productCardImage' src = {this.props.productInfo.image || 'https://static.thenounproject.com/png/1103191-200.png'}></img>
        <p className='related_details'>{this.props.productInfo.category}</p>
        <p className='related_details'>{this.props.productInfo.name}</p>
        <SalePrice original_price={this.props.productInfo.original_price} sale_price={this.props.productInfo.sale_price}/>
        <StarRating rating={this.props.productInfo.avgReview}/>
      </div>
    );
  }
}

export default ProductCard;
import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from '../review/starRating.jsx';

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
        <p>{this.props.productInfo.category}</p>
        <p>{this.props.productInfo.name}</p>
        <p>${this.props.productInfo.original_price}</p>
        <StarRating rating={this.props.productInfo.avgReview}/>
      </div>
    );
  }
}

export default ProductCard;
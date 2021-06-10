import React from 'react';
import ReactDOM from 'react-dom';

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
        <img src = {this.props.productInfo.image}></img>
        <p>{this.props.productInfo.category}</p>
        <p>{this.props.productInfo.name}</p>
        <p>{this.props.productInfo.original_price}</p>
        <p>{this.props.productInfo.avgReview}</p>
      </div>
    );
  }
}

export default ProductCard;
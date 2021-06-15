import React from 'react';
import ReactDOM from 'react-dom';

class SalePrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var jsx;
    if (this.props.sale_price === null) {
      jsx = (
        <p className='related_details'>${this.props.original_price}</p>
      );
    } else {
      jsx = (
        <div>
          <span className='related_sale'>${this.props.original_price}</span>
          <span> ${this.props.sale_price}</span>
        </div>
      );
    }
    return jsx;
  }
}

export default SalePrice;
import React from 'react';
import Size from './cartComponents/size.jsx';
import Quantity from './cartComponents/quantity.jsx'

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: null,
      size: 'Select Size',
      quantity: '-',
      openSizeDropdown: false,
      openQuantityDropdown: false
    };
    this.setProduct = this.setProduct.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.closeQuantityDropdown = this.closeQuantityDropdown.bind(this)
  }

  closeDropdown() {
    var openSizeDropdown = false;
    this.setState({
      openSizeDropdown
    });
  }

  closeQuantityDropdown() {
    var openQuantityDropdown = false;
    this.setState({
      openQuantityDropdown
    });
  }

  setProduct(size, quantity) {
    var openSizeDropdown = !this.state.openSizeDropdown;
    this.setState({
      size, quantity, openSizeDropdown
    });
  }

  setQuantity(quantity) {
    var openQuantityDropdown = !this.state.openQuantityDropdown
    this.setState({
      quantity, openQuantityDropdown
    });
  }

  render() {
    return (

      <div data-testid='add-to-cart' className='overview-add-to-cart'>
        <div className='overview-btns-row-1'>
          <Size data={this.props.data[0].skus} setSize={this.setProduct} size={this.state.size} openSizeDropdown={this.state.openSizeDropdown} closeSizeDropdown={this.closeDropdown}/>
          <Quantity quantity={this.state.quantity} openQuantityDropdown={this.state.openQuantityDropdown} closeQuantityDropdown={this.closeQuantityDropdown} setQuantity={this.setQuantity}/>
        </div>
        <div className='overview-btns-row-2'>
          <button>Add to Bag</button>
          <button>Star</button>
        </div>
      </div>
    );
  }
}

export default AddToCart;
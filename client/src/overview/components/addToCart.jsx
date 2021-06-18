import React from 'react';
import Size from './cartComponents/size.jsx';
import Quantity from './cartComponents/quantity.jsx'

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: null,
      size: 'Select Size',
      quantity: null,
      selectedQuantity: null,
      openSizeDropdown: false,
      openQuantityDropdown: false,
      askForSizeSelection: false,
      outOfStock: false
    };
    this.setProduct = this.setProduct.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.closeQuantityDropdown = this.closeQuantityDropdown.bind(this);
    this.setSelectedQuantity = this.setSelectedQuantity.bind(this);
    this.openSizeDropdown = this.openSizeDropdown.bind(this);
  }

  closeDropdown() {
    var openSizeDropdown = false;
    this.setState({
      openSizeDropdown
    });
  }

  openSizeDropdown(e) {
    console.log(e.target.className)
    var openSizeDropdown = true;
    var askForSizeSelection = false;

    if (e.target.className.includes('button')) {
      askForSizeSelection = true;
    }
    this.setState({
      openSizeDropdown, askForSizeSelection
    });
  }

  closeQuantityDropdown() {
    var openQuantityDropdown = false;
    this.setState({
      openQuantityDropdown
    });
  }

  setProduct(size, quantity, askForSizeSelection) {
    var openSizeDropdown = !this.state.openSizeDropdown;
    var askForSizeSelection = false;
    var selectedQuantity = null;
    this.setState({
      size, quantity, openSizeDropdown, selectedQuantity, askForSizeSelection
    });
  }

  setQuantity(quantity) {
    var openQuantityDropdown = !this.state.openQuantityDropdown;
    this.setState({
      quantity, openQuantityDropdown
    });
  }

  setSelectedQuantity(selectedQuantity) {
    var openQuantityDropdown = !this.state.openQuantityDropdown;
    this.setState({
      selectedQuantity, openQuantityDropdown
    });
  }

  render() {
    var addToCartButton;
    var selectSizeNotification =
      <p className='overview-image-gallery-askForSizeSelection'>Please select a size!</p>;

    if (this.state.size === 'Select Size') {
      addToCartButton =
        <button
          className='overview-addToCart-button'
          onClick={(e) => this.openSizeDropdown(e)}>Add to Cart
        </button>
      ;
    } else {
      addToCartButton =
        <button
          className='overview-addToCart-button'>Add to Cart</button>
    }
    return (

      <div data-testid='add-to-cart' className='overview-add-to-cart'>
        <div className='overview-btns-row-1'>
          <div className='overview-image-gallery-size-container'>
            {this.state.askForSizeSelection && selectSizeNotification}
            <Size
              data={this.props.data[this.props.i].skus}
              setSize={this.setProduct}
              size={this.state.size}
              openSizeDropdown={this.state.openSizeDropdown}
              closeSizeDropdown={this.closeDropdown}
              askForSizeSelection={this.state.askForSizeSelection}
            />
          </div>
          <Quantity
            quantity={this.state.quantity}
            openQuantityDropdown={this.state.openQuantityDropdown}
            closeQuantityDropdown={this.closeQuantityDropdown}
            selectedQuantity={this.state.selectedQuantity}
            setQuantity={this.setQuantity}
            setSelectedQuantity={this.setSelectedQuantity}
            size={this.state.size}
          />
        </div>
        <div className='overview-btns-row-2'>
          {addToCartButton}
          {/* <button className='overview-addToCart-button'>Add to Cart</button> */}
          {/* <button>Star</button> */}
        </div>
      </div>
    );
  }
}

export default AddToCart;
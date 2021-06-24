import React from 'react';
import axios from 'axios';

import Size from './cartComponents/size.jsx';
import Quantity from './cartComponents/quantity.jsx';


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

    //try updating inventory state here to pass to add to cart button
    this.setProduct = this.setProduct.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.closeQuantityDropdown = this.closeQuantityDropdown.bind(this);
    this.setSelectedQuantity = this.setSelectedQuantity.bind(this);
    this.openSizeDropdown = this.openSizeDropdown.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.checkCart = this.checkCart.bind(this);
  }

  checkCart() {
    axios({
      method: 'GET',
      url: '/cart'
    })
      .then(res => console.log(res.data))
      .catch(err => console.log('ERROR', err))
  }

  addItemToCart(sku_id, count) {
    axios({
      method: 'POST',
      url: '/cart',
      params: {sku_id, count}
    })
      .then(res => console.log('posted'))
      .catch(err => console.log('ERROR', err))
  }

  closeDropdown() {
    var openSizeDropdown = false;
    this.setState({
      openSizeDropdown
    });
  }

  openSizeDropdown(e) {
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

  setProduct(size, quantity, askForSizeSelection, sku) {
    var openSizeDropdown = !this.state.openSizeDropdown;
    var askForSizeSelection = false;
    var selectedQuantity = null;
    this.setState({
      sku, size, quantity, openSizeDropdown, selectedQuantity, askForSizeSelection
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

    var showCartButton = false;
    //Determine where or not to show 'Add to Cart'
    Object.keys(this.props.data[this.props.i].skus).map(sku => {
      if (this.props.data[this.props.i].skus[sku].quantity !== 0) {
        return showCartButton = true;
      }
    });

    var selectSizeNotification =
    <div className='overview-image-gallery-popup-container'>
      <span className='overview-image-gallery-askForSizeSelection'>Please select a size!</span>
    </div>

    if (this.state.size === 'Select Size') {
      addToCartButton =
        <div
          className='overview-addToCart-button'
          onClick={(e) => this.openSizeDropdown(e)}>
          <span>Add to Cart</span>
          <span>+</span>
        </div>;
    } else {
      addToCartButton = <div
        className='overview-addToCart-button'
        onClick={() => this.addItemToCart(this.state.sku, this.state.selectedQuantity)}>
        <span>Add to Cart</span>
        <span>+</span>
      </div>;
    }
    return (

      <div data-testid='add-to-cart' className='overview-add-to-cart'>
        <div className='overview-btns-row-1'>
          <div className='overview-addToCart-size-container'>
            {this.state.askForSizeSelection && selectSizeNotification}
            <Size
              data={this.props.data[this.props.i].skus}
              setSize={this.setProduct}
              size={this.state.size}
              openSizeDropdown={this.state.openSizeDropdown}
              closeSizeDropdown={this.closeDropdown}
              askForSizeSelection={this.state.askForSizeSelection}
              showCartButton={showCartButton}
            />
          </div>
          <div className='overview-addToCart-quantity-container'>
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
        </div>
        <div className='overview-btns-row-2'>
          {showCartButton && addToCartButton}
          {/* <button onClick={()=> this.checkCart()}>Check Cart</button> */}
        </div>
      </div>
    );
  }
}

export default AddToCart;
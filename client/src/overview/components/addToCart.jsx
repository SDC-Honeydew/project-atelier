import React from 'react';
import Size from './cartComponents/size.jsx';
import Quantity from './cartComponents/quantity.jsx'

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'Select Size',
      quantity: null,
      openSizeDropdown: false
    };
    this.setSize = this.setSize.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  closeDropdown() {
    var openSizeDropdown = false;
    this.setState({
      openSizeDropdown
    });
  }

  setSize(size) {
    var openSizeDropdown = !this.state.openSizeDropdown;
    this.setState({
      size, openSizeDropdown
    });
  }

  render() {
    return (

      <div data-testid='add-to-cart' className='overview-add-to-cart'>
        <div className='overview-btns-row-1'>
          <Size data={this.props.data[0].skus} setSize={this.setSize} size={this.state.size} openSizeDropdown={this.state.openSizeDropdown} closeSizeDropdown={this.closeDropdown}/>
          <Quantity data={this.props.data[0].skus}/>
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
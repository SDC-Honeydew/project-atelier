import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='add-to-cart' className='overview-add-to-cart'>
        <div className='overview-btns-row-1'>
          <button>Size</button>
          <button>Quantity</button>
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
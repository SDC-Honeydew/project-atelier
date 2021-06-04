import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='add-to-cart'>This will add product to cart!</div>
    );
  }
}

export default AddToCart;
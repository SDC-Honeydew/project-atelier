import React from 'react';
import Size from './size.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    //MANAGAE STATE HERERERERER
    this.state = {};
  }

  render() {
    return (

      <div data-testid='add-to-cart' className='overview-add-to-cart'>
        <div className='overview-btns-row-1'>
        {/*MANAGE STATE IN THERE  */}
          <Size data={this.props.data[0].skus}/>
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
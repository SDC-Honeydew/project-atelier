import React from 'react';
import axios from 'axios';

import StyleSelector from './components/styleSelect.jsx';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/imageGallery.jsx';
import ProductInformation from './components/productInfo.jsx';



class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getProductPage() {
    axios({
      method: 'get',
      url: '/product',
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err, 'whyyyyy'));

  }

  render() {
    return (
      <div className='product-overview' style={{border: '1px solid black'}}>
        <p>This will be the Overview component!!</p>
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
        <ImageGallery />
        <button onClick={() => this.getProductPage()}>Test</button>
      </div>
    );
  }
}

export default Overview;
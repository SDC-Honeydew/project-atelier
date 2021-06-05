import React from 'react';
import axios from 'axios';

import StyleSelector from './components/styleSelect.jsx';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/imageGallery.jsx';
import ProductInformation from './components/productInfo.jsx';

import sampleData from './sampleRelevantInfo.json';



class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'product': sampleData
    };
  }

  // componentDidMount() {
  //   this.getOneProduct();
  // }

  getOneProduct() {
    axios({
      method: 'get',
      url: '/r-data',
    })
      .then(res => {
        this.setState({
          product: res.data
        });
      })
      .catch(err => console.log(err, 'whyyyyy'));

  }

  render() {
    return (
      <div className='product-overview' style={{border: '1px solid black'}}>
        <p className='overview-title'>This will be the Overview component!!</p>
        {console.log(this.state.product)}
        <ProductInformation data={this.state.product}/>
        <StyleSelector />
        <AddToCart />
        <ImageGallery />
      </div>
    );
  }
}

export default Overview;
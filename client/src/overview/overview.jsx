import React from 'react';
import axios from 'axios';

import StyleSelector from './components/styleSelect.jsx';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/imageGallery.jsx';
import ProductInformation from './components/productInfo.jsx';
import ProductDescription from './components/ProductDescription.jsx';

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
      <div className='overview-product' style={{border: '1px solid black'}}>
        <p className='overview-title'>This will be the Overview component!!</p>
        {console.log(this.state.product)}
        <div className='overview-top-row'>
          <ImageGallery />
          <div className='overview-right-col'>
            <ProductInformation data={this.state.product}/>
            <StyleSelector />
            <AddToCart />
          </div>
        </div>
        <div className='overview-bottom-row'>
          <ProductDescription />
        </div>
        <button onClick={() => this.getOneProduct()}>Button</button>
      </div>
    );
  }
}

export default Overview;
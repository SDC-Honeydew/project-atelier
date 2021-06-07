import React from 'react';
import axios from 'axios';

import StyleSelector from './components/styleSelect.jsx';
import AddToCart from './components/addToCart.jsx';
import ImageGallery from './components/imageGallery.jsx';
import ProductInformation from './components/productInfo.jsx';
import ProductDescription from './components/productDescription.jsx';

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
      <div data-testid='overview'className='overview-product' style={{border: '1px solid black'}}>
        <div className='overview-top-row'>
          <ImageGallery
            photo={this.state.product.styles[0].photos[0]}
          />
          <div className='overview-right-col'>
            <ProductInformation
              category={this.state.product.category}
              name={this.state.product.name}
            />
            <StyleSelector
              styles={this.state.product.styles}
            />
            <AddToCart />
          </div>
        </div>
        <div className='overview-bottom-row'>
          <ProductDescription
            description={this.state.product.description}
            slogan = {this.state.product.slogan}
          />
        </div>
        {/* <button onClick={() => this.getOneProduct()}>Button</button> */}
      </div>
    );
  }
}

export default Overview;
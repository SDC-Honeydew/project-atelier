import React from 'react';
import axios from 'axios';

import StyleSelector from './components/styleSelect.jsx';
import AddToCart from './components/addToCart.jsx';
import ImageGallery from './components/imageGallery.jsx';
import ProductInformation from './components/productInfo.jsx';
import ProductDescription from './components/productDescription.jsx';

import sampleData from './sampleRelevantData.json';



class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: sampleData
    };
  }

  // componentDidMount() {
  //   this.getOneProduct();

  // }

  getOneProduct() {
    axios({
      method: 'GET',
      url: '/r-data',
    })
      .then(res => {
        this.setState({
          product: res.data
        }, console.log('this',this.state.product));
      })
      .catch(err => console.log(err, 'whyyyyy'));

  }

  render() {
    return (
      <div data-testid='overview'className='overview-product' style={{border: '1px solid black'}}>
        <div className='overview-top-row'>
          <ImageGallery
            photos={this.state.product.styles[0].photos}
          />
          <div className='overview-right-col'>
            <ProductInformation
              category={this.state.product.category}
              name={this.state.product.name}
              price={this.state.product.styles[0].original_price}
            />
            <StyleSelector
              styles={this.state.product.styles}
            />
            <AddToCart data={this.state.product.styles}/>
          </div>
        </div>
        <div className='overview-bottom-row'>
          <ProductDescription
            description={this.state.product.description}
            slogan = {this.state.product.slogan}
          />
        </div>
        <button onClick={() => this.getOneProduct()}>Button</button>
      </div>
    );
  }
}

export default Overview;
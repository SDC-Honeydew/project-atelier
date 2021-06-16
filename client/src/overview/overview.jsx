import React from 'react';
import axios from 'axios';

import StyleSelector from './components/styleSelect.jsx';
import AddToCart from './components/addToCart.jsx';
import ImageGallery from './components/imageGallery.jsx';
import ProductInformation from './components/productInfo.jsx';
import ProductDescription from './components/productDescription.jsx';

import sampleData from './sampleRelevantData.json';
import caroselData from './caroselData.json';



class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: caroselData,
      currentStyleIndex: 0
    };

    //this.getOneProduct();

    this.setCurrentStyleIndex = this.setCurrentStyleIndex.bind(this);
  }

  getOneProduct() {
    axios({
      method: 'GET',
      url: '/r-data',
    })
      .then(res => {
        this.setState({
          product: res.data
        });
      })
      .catch(err => console.log(err, 'whyyyyy'));

  }

  setCurrentStyleIndex(currentStyleIndex) {
    this.setState({
      currentStyleIndex
    });
  }

  render() {
    return (
      <div data-testid='overview'className='overview-product' style={{border: '1px solid black'}}>
        <div className='overview-top-row'>
          <ImageGallery
            photos={this.state.product.styles[this.state.currentStyleIndex].photos}
            i={this.state.currentStyleIndex}
            key={this.state.currentStyleIndex}
            setMainImg={this.setCurrentStyleIndex}
          />
          <div className='overview-right-col'>
            <ProductInformation
              category={this.state.product.category}
              name={this.state.product.name}
              price={this.state.product.styles[this.state.currentStyleIndex].original_price}
            />
            <StyleSelector
              styles={this.state.product.styles}
              currentStyleIndex={this.state.currentStyleIndex}
              setCurrentStyleIndex={this.setCurrentStyleIndex}
            />
            <AddToCart
              data={this.state.product.styles}
              i={this.state.currentStyleIndex}
              key={this.state.currentStyleIndex}/>
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
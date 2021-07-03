import React from 'react';
import axios from 'axios';
import trackClicks from '../tracking/trackClicks.jsx';

import StyleSelector from './components/styleSelect.jsx';
import AddToCart from './components/addToCart.jsx';
import ImageGallery from './components/imageGallery.jsx';
import ProductInformation from './components/productInfo.jsx';
import ProductDescription from './components/productDescription.jsx';

import sampleData from './sampleRelevantData.json';
import caroselData from './caroselData.json';
import sizeData from './sizeData.json';



class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentStyleIndex: 0
    };
    //this.getOneProduct(this.props.id)

    this.setCurrentStyleIndex = this.setCurrentStyleIndex.bind(this);
  }

  componentDidMount() {
    this.getOneProduct(this.props.id);
  }

  getOneProduct(id) {
    axios({
      method: 'GET',
      url: '/overview',
      params: {id}
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
    var productOverview;
    if (this.state.product.styles) {
      productOverview =
      <div onClick={(e) => this.props.logged(e)}>
        <div data-testid='overview'className='overview-product'>
          <div className='overview-top-row'>
            <div className='overview-left-col'>
              <ImageGallery
                photos={this.state.product.styles[this.state.currentStyleIndex].photos}
                i={this.state.currentStyleIndex}
                key={this.state.currentStyleIndex}
                setMainImg={this.setCurrentStyleIndex}
              />
            </div>
            <div className='overview-right-col'>
              <ProductInformation
                category={this.state.product.category}
                name={this.state.product.name}
                price={this.state.product.styles[this.state.currentStyleIndex]}
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
              features = {this.state.product.features}
            />
          </div>
        </div>
      </div>;
    } else {
      productOverview = <div>Loading...</div>;
    }
    return (
      productOverview
    );
  }
}

export default trackClicks(ProductOverview);
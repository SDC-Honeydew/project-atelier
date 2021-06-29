import React from 'react';
import ProductCard from './productCard.jsx';
import ComparisonModal from './comparisonModal.jsx';
import axios from 'axios';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [
        {
          'id': 2,
          'name': 'Product Name',
          'category': 'Product Category',
          'original_price': '0',
          'image': 'https://static.thenounproject.com/png/1103191-200.png',
          'avgReview': 0,
        }
      ],
      showModal: false,
      currentProd: {},
      comparisonProd: {}
    };
    this.onStarClick = this.onStarClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    axios.get('/related', {
      params: {
        item: this.props.item
      },
    }).then((response) => {
      this.setState({
        relatedProducts: response.data
      });
    }).catch((error) => {
      console.log('ERROR from req to get /related in relatedList.jsx:', error);
    });

    axios.get('/related/features', {
      params: {
        item: this.props.item
      },
    }).then((response) => {
      this.setState({
        currentProd: response.data
      });
    }).catch((error) => {
      console.log('ERROR from req to get /related_features in relatedList.jsx:', error);
    });
  }

  onStarClick(featureData) {
    this.setState({
      comparisonProd: featureData,
      showModal: true,
    });
  }

  closeModal(event) {
    this.setState({
      showModal: false
    });
  }

  render() {
    const products = this.state.relatedProducts;
    return (
      <div id='related_relatedProducts'>
        <h6>RELATED PRODUCTS</h6>
        <div className='related_productList'>
          {products.map((product) =>
            <ProductCard productInfo={product} cardType={'related'} key={`related_${product.id}`} handleCardClick={this.props.handleCardClick} onIconClick={this.onStarClick}/>
          )}
          <ComparisonModal currentProd={this.state.currentProd} comparisonProd={this.state.comparisonProd} showModal={this.state.showModal} closeModal={this.closeModal}/>
        </div>
      </div>
    );
  }
}

export default RelatedList;
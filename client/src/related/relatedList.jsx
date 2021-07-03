import React from 'react';
import ProductCard from './productCard.jsx';
import ComparisonModal from './comparisonModal.jsx';
import axios from 'axios';
import ScrollButton from './scrollButton.jsx';

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
      comparisonProd: {},
      start: 0,
      end: 1,
      length: 1
    };

    this.onStarClick = this.onStarClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    axios.get('/related', {
      params: {
        item: this.props.item
      },
    }).then((response) => {
      var end;
      if (response.data.length > 3) {
        end = 3;
      } else {
        end = response.data.length - 1;
      }
      this.setState({
        relatedProducts: response.data,
        end: end,
        length: response.data.length
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

  scrollLeft(event) {
    var oldStart = this.state.start;
    var oldEnd = this.state.end;
    this.setState({
      start: oldStart - 1,
      end: oldEnd - 1
    });
    event.preventDefault();
  }

  scrollRight(event) {
    var oldStart = this.state.start;
    var oldEnd = this.state.end;
    this.setState({
      start: oldStart + 1,
      end: oldEnd + 1
    });
    event.preventDefault();
  }

  render() {
    const products = this.state.relatedProducts.slice(this.state.start, this.state.end + 1);
    return (
      <div id='related_relatedProducts'>
        <h6>RELATED PRODUCTS</h6>
        <div className='related_productList'>
          <ScrollButton direction={'L'} start={this.state.start} end={this.state.end} length={this.state.length} onClick={this.scrollLeft}/>
          {products.map((product) =>
            <ProductCard productInfo={product} cardType={'related'} key={`related_${product.id}`} handleCardClick={this.props.handleCardClick} onIconClick={this.onStarClick}/>
          )}
          <ComparisonModal currentProd={this.state.currentProd} comparisonProd={this.state.comparisonProd} showModal={this.state.showModal} closeModal={this.closeModal}/>
          <ScrollButton direction={'R'} start={this.state.start} end={this.state.end} length={this.state.length} onClick={this.scrollRight}/>
        </div>
      </div>
    );
  }
}

export default RelatedList;
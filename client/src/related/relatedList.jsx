import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './productCard.jsx';
import axios from 'axios';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          'id': 11,
          'name': 'Air Minis 250',
          'category': 'Basketball Shoes',
          'original_price': '0',
          'image': 'urlplaceholder/style_1_photo_number.jpg',
          'avgReview': 4.3,
          'features': [
            {
              'feature': 'Sole',
              'value': 'Rubber'
            },
            {
              'feature': 'Material',
              'value': 'FullControlSkin'
            }
          ]
        }
      ]
    };
  }

  refreshItemList() {
    axios.get('/related', {
      params: {
        // FIXME should pull item # based on current page
        item: this.props.item
      },
    }
    ).then((response) => {
      this.setState({
        products: response.data
      });
    }).catch((error) => {
      console.log('ERROR from req to get /related in relatedList.jsx:', error);
    });
  }

  componentDidMount() {
    this.refreshItemList();
  }

  // componentDidUpdate() {
  //   this.refreshItemList();
  // }


  render() {
    console.log('current products:', this.state.products);
    const products = this.state.products;
    return (
      <div id='related_relatedProducts'>
        <h6>RELATED PRODUCTS</h6>
        <div id='related_relatedList'>
          {products.map((product) =>
            <ProductCard productInfo={product} cardType={'related'} key={product.id} handleCardClick={this.props.handleCardClick}/>
          )}
        </div>
      </div>
    );
  }
}

export default RelatedList;
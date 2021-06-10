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

  componentDidMount() {
    axios.get('/related', {
      params: {
        // FIXME should pull item # based on current page
        item: 22125
      },
    }
    ).then((response) => {
      console.log('response from req to get /related in relatedList.jsx:', response);
    }).catch((error) => {
      console.log('ERROR from req to get /related in relatedList.jsx:', error);
    });
  }


  render() {
    const products = this.state.products;
    return (
      <div id='related_relatedList'>
        <h6>RELATED PRODUCTS</h6>
        {products.map((product) =>
          <ProductCard productInfo={product} key={product.id}/>
        )}
      </div>
    );
  }
}

export default RelatedList;
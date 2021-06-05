import React from 'react';
import ReactDOM from 'react-dom';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'id': 11,
      'name': 'Air Minis 250',
      'category': 'Basketball Shoes',
      'default_price': '0',
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
    };
  }

  //componentDidMount
  //call to server for related products
  //pulls item numbers related to that item
  //for each item  pull image, category, name, price, rating

  render() {
    return (
      <div id='related_relatedList'>
        <h6>RELATED PRODUCTS</h6>

      </div>
    );
  }
}

export default RelatedList;
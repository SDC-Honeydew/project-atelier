import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './productCard.jsx';
import axios from 'axios';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [
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
        },
        {
          'id': 14,
          'name': 'Air Moonis 250',
          'category': 'Soccer Shoes',
          'original_price': '350',
          'sale_price': '300',
          'image': 'urlplaceholder/style_1_photo_number.jpg',
          'avgReview': 4.3,
          'features': [
            {
              'feature': 'Sole',
              'value': 'Wood'
            },
            {
              'feature': 'Color',
              'value': 'White'
            }
          ]
        },
        {
          'id': 15,
          'name': 'Truthy Trainers',
          'category': 'Running Shoes',
          'original_price': '0',
          'image': 'urlplaceholder/style_1_photo_number.jpg',
          'avgReview': 4.3,
          'features': [
            {
              'feature': 'Sole',
              'value': 'Pure'
            },
            {
              'feature': 'Waterproof',
              'value': true
            }
          ]
        },
      ],
    };
    this.onPlusClick = this.onPlusClick.bind(this);
  }

  componentDidMount() {
  }

  onPlusClick() {
    axios.post('/related/outfit', {
      params: {
        item: this.props.item
      },
      withCredentials: true
    }).then((response) => {
      console.log('success adding item to cookies', response);
    }).catch((error) => {
      console.log('ERROR adding item to outfit in outfitList.jsx:', error);
    });
  }

  onXClick() {
    // make put request to /related/outfit
  }

  refreshOutfit() {

  }

  render() {
    const outfit = this.state.outfit;
    // console.log(outfit);

    return (
      <div id='related_outfit'>
        <h6>YOUR OUTFIT</h6>
        <div class='related_productList'>
          <div className="related_productCard related_addToOutfit" onClick={this.onPlusClick}>+</div>
          {/* special card for adding item
            onPlusClick={this.onPlusClick} */}
          {outfit.map((product) =>
            <ProductCard productInfo={product} cardType={'outfit'} key={`outfit_${product.id}`} handleCardClick={this.props.handleCardClick} onIconClick={this.onXClick}/>
          )}
        </div>
      </div>
    );
  }
}

export default OutfitList;
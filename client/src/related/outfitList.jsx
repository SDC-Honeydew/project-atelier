import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './productCard.jsx';
import axios from 'axios';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [],
    };
    this.onPlusClick = this.onPlusClick.bind(this);
    this.onXClick = this.onXClick.bind(this);
  }

  componentDidMount() {
    this.refreshOutfit();
  }

  onPlusClick() {
    axios.post('/related/outfit', {
      params: {
        item: this.props.item
      },
      withCredentials: true
    }).then(() => {
      this.refreshOutfit();
    }).catch((error) => {
      console.log('ERROR adding item to outfit in outfitList.jsx:', error);
    });
  }

  onXClick(productClicked) {
    axios.put('/related/outfit', {
      params: {
        item: productClicked.id
      },
      withCredentials: true
    }).then(() => {
      this.refreshOutfit();
    }).catch((error) => {
      console.log('ERROR removing item from outfit in outfitList.jsx:', error);
    });
  }

  refreshOutfit() {
    axios.get('/related/outfit', {
      withCredentials: true
    }).then((response) => {
      this.setState({outfit: response.data});
    }).catch((error) => {
      console.log('ERROR adding item to outfit in outfitList.jsx:', error);
    });
  }

  render() {
    const outfit = this.state.outfit;

    return (
      <div id='related_outfit'>
        <h6>YOUR OUTFIT</h6>
        <div className='related_productList'>
          <div className="related_productCard related_addToOutfit" id='add
          toOutfit' onClick={this.onPlusClick}><p>+</p><p>Add to Outfit</p></div>
          {outfit.map((product) =>
            <ProductCard productInfo={product} cardType={'outfit'} key={`outfit_${product.id}`} handleCardClick={this.props.handleCardClick} onIconClick={this.onXClick}/>
          )}
        </div>
      </div>
    );
  }
}

export default OutfitList;
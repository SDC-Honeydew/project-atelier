import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './productCard.jsx';
import axios from 'axios';
import ScrollButton from './scrollButton.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [],
      start: 0,
      end: 0,
      length: 0
    };
    this.onPlusClick = this.onPlusClick.bind(this);
    this.onXClick = this.onXClick.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
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

  refreshOutfit() {
    axios.get('/related/outfit', {
      withCredentials: true
    }).then((response) => {
      var newEnd;
      if (response.data.length >= 3) {
        newEnd = 2;
      } else {
        newEnd = response.data.length - 1;
      }
      this.setState({
        outfit: response.data,
        end: newEnd,
        length: response.data.length

      });
    }).catch((error) => {
      console.log('ERROR adding item to outfit in outfitList.jsx:', error);
    });
  }

  render() {
    const outfit = this.state.outfit.slice(this.state.start, this.state.end + 1);

    return (
      <div id='related_outfit'>
        <h6>YOUR OUTFIT</h6>
        <div className='related_productList'>
          <ScrollButton direction={'L'} start={this.state.start} end={this.state.end} length={this.state.length} onClick={this.scrollLeft}/>
          <div className="related_productCard related_addToOutfit" id='add
          toOutfit' onClick={this.onPlusClick}><p>+</p><p>Add the Current Item to Your Outfit</p></div>
          {outfit.map((product) =>
            <ProductCard productInfo={product} cardType={'outfit'} key={`outfit_${product.id}`} handleCardClick={this.props.handleCardClick} onIconClick={this.onXClick}/>
          )}
          <ScrollButton direction={'R'} start={this.state.start} end={this.state.end} length={this.state.length} onClick={this.scrollRight}/>
        </div>
      </div>
    );
  }
}

export default OutfitList;
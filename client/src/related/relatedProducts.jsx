import React from 'react';
import ReactDOM from 'react-dom';
import RelatedList from './relatedList.jsx';
import OutfitList from './outfitList.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('current item in relatedProduct component', this.props.item);
    return (
      <div id="related_relatedDiv">
        <RelatedList item={this.props.item} handleCardClick={this.props.handleCardClick}/>
        <OutfitList />
      </div>
    );
  }
}

export default RelatedProducts;
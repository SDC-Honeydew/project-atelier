import React from 'react';
import RelatedList from './relatedList.jsx';
import OutfitList from './outfitList.jsx';
class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProd: {}
    };
  }

  getNewProduct(id) {
    window.location.replace(`/?product=${id}`);
  }

  render() {
    // console.log('current item in relatedProduct component', this.props.item);
    return (
      <div id="related_relatedDiv">
        <RelatedList item={this.props.item} handleCardClick={this.getNewProduct} />
        <OutfitList />
      </div>
    );
  }
}

export default RelatedProducts;
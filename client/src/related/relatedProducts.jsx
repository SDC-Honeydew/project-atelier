import React from 'react';
import RelatedList from './relatedList.jsx';
import OutfitList from './outfitList.jsx';
import trackClicks from '../tracking/trackClicks.jsx';

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
    return (
      <div id="related_relatedDiv" onClick={(e) => this.props.logged(e)}>
        <RelatedList item={this.props.item} handleCardClick={this.getNewProduct} />
        <OutfitList item={this.props.item} handleCardClick={this.getNewProduct}/>
      </div>
    );
  }
}

export default trackClicks(RelatedProducts);
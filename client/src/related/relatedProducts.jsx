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
    return (
      <div className ="related_relatedDiv">
        <RelatedList />
        <OutfitList />
      </div>
    );
  }
}

export default RelatedProducts;
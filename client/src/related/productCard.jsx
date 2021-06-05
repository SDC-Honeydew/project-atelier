import React from 'react';
import ReactDOM from 'react-dom';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="related_productCard">
        <img src = {this.state.img}></img>

      </div>
    );
  }
}

export default RelatedList;
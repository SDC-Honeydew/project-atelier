import React from 'react';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button>{this.props.quantity}</button>
    )
  }
}

export default Quantity;
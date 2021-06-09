import React from 'react';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button>{this.props.quantity || '-'}</button>
      </div>

    )
  }
}

export default Quantity;
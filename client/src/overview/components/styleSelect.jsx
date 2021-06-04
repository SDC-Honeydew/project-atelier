import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='style-select'>This will show styles!</div>
    );
  }
}

export default StyleSelector;
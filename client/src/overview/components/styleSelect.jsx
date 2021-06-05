import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='style-select'>
        {this.props.styles.map(style => {
          return (
            <p>{style.name}</p>
          );
        })}
      </div>
    );
  }
}

export default StyleSelector;
import React from 'react';

class ScrollButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var jsx;
    if ((this.props.direction === 'L' && this.props.start === 0) ||
        (this.props.direction === 'R' && this.props.end === this.props.length - 1)) {
      jsx = null;
    } else if (this.props.direction === 'L') {
      jsx = (
        <div>
          <btn className='related_leftButton' onClick={this.props.onClick}>{'<'}</btn>
        </div>
      );
    } else {
      jsx = (
        <div>
          <btn className='related_rightButton' onClick={this.props.onClick}>{'>'}</btn>
        </div>
      );
    }
    return jsx;
  }
}

export default ScrollButton;
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
      jsx = <div className='related_scrollButton'></div>;
    } else if (this.props.direction === 'L') {
      jsx = (
        <div className='related_scrollButton'>
          <btn className='related_leftButton' onClick={this.props.onClick}>{'<'}</btn>
        </div>
      );
    } else {
      jsx = (
        <div className='related_scrollButton'>
          <btn className='related_rightButton' onClick={this.props.onClick}>{'>'}</btn>
        </div>
      );
    }
    return jsx;
  }
}

export default ScrollButton;
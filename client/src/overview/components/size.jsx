import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick() {
    var open = !this.state.open;
    this.setState({
      open
    });
  }

  render() {
    return (
      <div className='size-container' data-testid='size-dropdown'>
        <button className='size-button' onClick={this.handleButtonClick}>Size</button>
        {this.state.open && (
          <div className='size-dropdown'>
            <ul className='size-ul'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        )}


      </div>
    );
  }
}


export default Size;

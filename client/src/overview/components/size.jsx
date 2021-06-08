import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleButtonClick() {
    var open = !this.state.open;
    this.setState({
      open
    });
  }

  handleClickOutside(e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false
      });
    }
  }

  render() {
    return (
      <div className='size-container' data-testid='size-dropdown'ref={this.container}>
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

import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false,
      selectedSize: 'Select Size'
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

  onSizeClick(size) {
    var open = !this.state.open;
    this.setState({
      selectedSize: size,
      open
    });
  }

  handleButtonClick() {
    console.log('werks')
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
        <button className='size-button' onClick={this.handleButtonClick}>{this.state.selectedSize}</button>
        {this.state.open && (
          <div className='size-dropdown'>
            <ul className='size-ul'>
              {
                Object.keys(this.props.data).map((sku, index) => (
                  <li onClick={() => this.onSizeClick(this.props.data[sku].size)}>{this.props.data[sku].size}</li>
                ))
              }
            </ul>
          </div>
        )}


      </div>
    );
  }
}


export default Size;

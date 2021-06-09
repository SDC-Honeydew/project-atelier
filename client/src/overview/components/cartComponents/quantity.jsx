import React from 'react';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.container = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.props.closeQuantityDropdown();
    }
  }

  render() {
    return (
      <div className='overview-quantity-container' data-testid='quantity-dropdown' ref={this.container}>
        <button className='overview-quantity-button' onClick={() => this.props.setQuantity(this.props.quantity)}>{this.props.quantity}</button>
        {this.props.openQuantityDropdown && (
          <div className='overview-quantity-dropdown'>
            <ul className='overview-quantity-ul'>
              {
                Array.from(Array(this.props.quantity), (e, i) => (
                  <li key={i}>{i + 1}</li>
                ))
              }
            </ul>
          </div>
        )}


      </div>

    )
  }
}

export default Quantity;
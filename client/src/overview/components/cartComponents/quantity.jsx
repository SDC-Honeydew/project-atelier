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
    var quantityDownArrow;

    if (this.props.size !== 'Select Size') {
      quantityDownArrow = <span>&#8744;</span>;
    } else {
      quantityDownArrow = <span></span>;
    }
    return (
      <div className='overview-quantity-container' data-testid='quantity-dropdown' ref={this.container}>
        <div className='overview-quantity-button' onClick={() => this.props.setQuantity(this.props.quantity)}>
          <span>{this.props.size === 'Select Size' ? '-' : this.props.size !== 'Select Size' && this.props.selectedQuantity ? this.props.selectedQuantity : '1'}</span>
          {quantityDownArrow}
        </div>
        {(this.props.openQuantityDropdown && this.props.size !== 'Select Size') && (
          <div className='overview-quantity-dropdown'>
            {<ul className='overview-quantity-ul'>
              {
                Array.from(Array(this.props.quantity).slice(0, 15), (e, i) => (
                  <li
                    onClick={() => this.props.setSelectedQuantity(i + 1)}
                    key={i}
                    className='overview-addToCart-dropdown-li'>{i + 1}</li>
                ))
              }
            </ul>
            }
          </div>
        )}
      </div>
    );
  }
}

export default Quantity;
import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
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
      this.props.closeSizeDropdown();
    }
  }

  render() {
    return (
      <div className='size-container' data-testid='size-dropdown'ref={this.container}>
        <button className='size-button' onClick={() => this.props.setSize(`${this.props.size}`)}>{this.props.size}</button>
        {this.props.openSizeDropdown && (
          <div className='size-dropdown'>
            <ul className='size-ul'>
              {
                Object.keys(this.props.data).map((sku, index) => (
                  <li onClick={() => this.props.setSize(this.props.data[sku].size)}>{this.props.data[sku].size}</li>
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

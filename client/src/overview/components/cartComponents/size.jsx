import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      outOfStock: false
    };
    this.container = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);

    var outOfStock = true;

    Object.keys(this.props.data).map(sku => {
      if (this.props.data[sku].quantity !== 0) {
        outOfStock = false;
        return;
      }
    });

    this.setState({
      outOfStock
    });
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
      <div className='overview-size-container' data-testid='size-dropdown'ref={this.container}>
        <button className='overview-size-button' onClick={() => this.props.setSize(`${this.props.size}`)}>{this.state.outOfStock ? 'OUT OFSTOCK' : this.props.size}</button>
        {this.props.openSizeDropdown &&
          <div className='overview-size-dropdown'>
            <ul className='overview-size-ul'>
              {
                Object.keys(this.props.data).map((sku, index) => {
                  if (this.props.data[sku].quantity !== 0) {
                    return <li onClick={() => this.props.setSize(this.props.data[sku].size, this.props.data[sku].quantity)}>{this.props.data[sku].size}</li>;
                  }
                })
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}


export default Size;

import React from 'react';

const Check = () => {
  return (<img
    src='https://cdn.pixabay.com/photo/2016/10/10/01/49/hook-1727484_1280.png'
    className='overview-styles-checkbox'
    height='10'
    width='10'></img>
  );
};

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: this.props.style.name,
      active: false,
      style: this.props.style.name
    };
  }

  componentDidMount() {
    let selected;
    if (this.props.currentStyle === this.props.style.name) {
      selected = true;
      this.setState({
        selected
      });
    }
  }

  testClick(style) {
    this.props.toggle(style);
    console.log(this.props)
    if (this.props.currentStyle === this.props.style.name) {
      let selected = true;
      this.setState({
        selected
      });
    } else {
      let selected = false;
      this.setState({
        selected
      });
    }

  }


  render() {
    return (
      <li className='overview-styles-imgs'>
        <img
          src={this.props.style.photos[0].thumbnail_url}
          onClick={() => this.testClick(this.props.style.name)}
          //onClick={() => this.props.toggle(this.props.style.name)}
          className='overview-styles-img'
          height='50'
          width='50'>
        </img>
        {this.state.selected && <Check />}
        <p>{this.props.style.name}</p>
      </li>
    );
  }


};

export default ProductStyle;
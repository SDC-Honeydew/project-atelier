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
      showCheck: false
    };
  }

  handleClick() {
    var show = this.state.showCheck ? false : true;
    this.setState({
      showCheck: show
    });
  }

  render() {
    return (
      <li className='overview-styles-imgs'>
        <img
          src={this.props.style.photos[0].thumbnail_url}
          onClick={() => this.handleClick()}
          className='overview-styles-img'
          height='50'
          width='50'>
        </img>
        {this.state.showCheck && <Check />}
        <p>{this.props.style.name}</p>
      </li>
    );
  }


};

export default ProductStyle;
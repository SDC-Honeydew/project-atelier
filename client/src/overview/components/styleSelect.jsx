import React from 'react';
import ProductStyle from './productStyle.jsx';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.onStyleClick = this.onStyleClick.bind(this);
  }

  onStyleClick(style) {
    this.setState({
      currentStyle: style
    });
  }

  render() {
    return (
      <div>
        <h3>{`Style > ${this.props.styles[this.props.currentStyleIndex].name}`}</h3>
        <ul className='overview-styles-thumbnails-container' data-testid='style-select'>
          {this.props.styles.map((style, i) => {
            return (
              <ProductStyle
                key={i}
                i={i}
                style={style}
                toggle={this.props.setCurrentStyleIndex}
                currentStyle={this.props.styles[this.props.currentStyleIndex].name}
                showCheck={this.props.styles[this.props.currentStyleIndex].name === style.name}
              />);
          })}
        </ul>
      </div>
    );
  }
}

export default StyleSelector;
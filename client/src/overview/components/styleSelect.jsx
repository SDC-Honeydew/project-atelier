import React from 'react';
import ProductStyle from './productStyle.jsx';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.styles[0].name,
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
        <h3>{`Style > ${this.state.currentStyle}`}</h3>
        <ul className='overview-styles-thumbnails-container' data-testid='style-select'>
          {this.props.styles.map((style, i) => {
            return (
              <ProductStyle
                key={i}
                style={style}
                toggle={this.onStyleClick}
                currentStyle={this.state.currentStyle}
                showCheck={this.state.currentStyle === style.name}
              />);
          })}
        </ul>
      </div>
    );
  }
}

export default StyleSelector;
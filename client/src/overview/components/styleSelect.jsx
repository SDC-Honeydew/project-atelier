import React from 'react';
import ProductStyle from './productStyle.jsx';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.styles[0].name
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
        <h3>{`Style > ${this.props.styles[0].name}`}</h3>
        <ul className='overview-styles-thumbnails-container' data-testid='style-select'>
          {this.props.styles.map(style => {
            return (<ProductStyle style={style}
                      toggle={this.onStyleClick}
                      currentStyle={this.state.currentStyle}/>);
          })}
        </ul>
      </div>
    );
  }
}

export default StyleSelector;
import React from 'react';
import ProductStyle from './productStyle.jsx';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>{`Style > ${this.props.styles[0].name}`}</h3>
        <ul className='overview-styles-thumbnails-container' data-testid='style-select'>
          {this.props.styles.map(style => {
            return (<ProductStyle style={style}/>);
            // return (
            //   <li className='overview-styles-imgs'>
            //     <img
            //       src={style.photos[0].thumbnail_url}
            //       className='overview-styles-img'
            //       height='50'
            //       width='50'>
            //     </img>
            //     <img
            //       src='https://cdn.pixabay.com/photo/2016/10/10/01/49/hook-1727484_1280.png'
            //       className='overview-styles-checkbox'
            //       height='10'
            //       width='10'></img>
            //     <p>{style.name}</p>
            //   </li>
            // );
          })}
        </ul>
      </div>
    );
  }
}

export default StyleSelector;
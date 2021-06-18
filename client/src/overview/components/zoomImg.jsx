import React from 'react';

class ZoomImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  movingZoom(e) {
    var zoomImg = e.target.children[0];

    var clientX = e.clientX - e.target.offsetLeft;
    var clientY = e.clientY - e.target.offsetTop;

    var mWidth = e.target.offsetWidth + 100;
    var mHeight = e.target.offsetHeight + 100;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    zoomImg.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2.5)`;
  }

  render() {
    return (
      <figure
        onMouseMove={(e) => this.movingZoom(e)}
        className='overview-image-gallery-zoom-container'>
        <img
          src={this.props.src}
          className='overview-image-gallery-img-zoom'>
        </img>
      </figure>

    );
  }
}

export default ZoomImg;
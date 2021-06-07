import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='image-gallery'>
        <img src={this.props.photo.url} width='100' height='200'></img>
      </div>
    );
  }
}

export default ImageGallery;
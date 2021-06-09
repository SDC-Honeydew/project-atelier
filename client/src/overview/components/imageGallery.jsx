import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: this.props.photos[0].url,
      thumbnailPhotos: this.props.photos,
      currentImage: null,

    };
  }
//use current image to show currently selected property
//on click to change current image
//make img its own seperate component to pass down current image props to render

  render() {
    return (
      <div className='overview-image-gallery' data-testid='image-gallery'>
        <img src={this.state.mainPhoto} width='400' height='600'></img>
        <div className='overview-thumbnails'>
          {this.state.thumbnailPhotos.map((photo, key) => (
            <img className='overview-thumbnails-img'src={photo.url} width='100' height='100'></img>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
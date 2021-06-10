import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: this.props.photos[0].url,
      thumbnailPhotos: this.props.photos,
      currentImage: null,

    };

    this.setMainImage = this.setMainImage.bind(this)
  }

  setMainImage(e) {
    e.preventDefault();
    var mainPhoto = e.target.src;
    this.setState({
      mainPhoto
    })
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
            <img onClick={(e) => this.setMainImage(e)}className='overview-thumbnails-img'src={photo.url} width='100' height='100'></img>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
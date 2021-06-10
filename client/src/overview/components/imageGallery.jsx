import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: this.props.photos[0].url,
      thumbnailImgs: this.props.photos,
      currentImg: null,

    };

    this.setMainImage = this.setMainImg.bind(this)
  }

  setMainImg(e) {
    e.preventDefault();
    var mainImg = e.target.src;
    this.setState({
      mainImg
    })
  }
//use current image to show currently selected property
//on click to change current image
//make img its own seperate component to pass down current image props to render

  render() {
    return (
      <div className='overview-image-gallery' data-testid='image-gallery'>
        <img src={this.state.mainImg} width='400' height='600'></img>
        <div className='overview-thumbnails'>
          {this.state.thumbnailImgs.map((img, key) => (
            <img onClick={(e) => this.setMainImg(e)} className={`overview-thumbnails-img${this.state.mainImg === img.url ? '-highlight' : ''}`}src={img.url} width='100' height='100'></img>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
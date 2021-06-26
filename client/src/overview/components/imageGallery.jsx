import React from 'react';
import ZoomImg from './zoomImg.jsx';
import ThumbnailCarousel from './thumbnailCarousel.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: this.props.photos[0].url,
      currentIndex: 0,
      thumbnailImgs: this.props.photos,
      currentImg: null,
      firstImg: this.props.photos[0].url,
      lastImg: this.props.photos[this.props.photos.length - 1].url,
      expand: false,
      zoom: false

    };
    this.setMainImg = this.setMainImg.bind(this);
    this.expandImg = this.expandImg.bind(this);
  }

  setMainImg(e, i, imgUrl) {
    e.preventDefault();
    var mainImg = imgUrl || e.target.src || this.props.photos[i].url;
    this.setState({
      mainImg,
      currentIndex: i
    });
  }

  expandImg(e) {
    if (e.target.className.includes('right') || e.target.className.includes('left') || e.target.className.includes('thumbnails')) {
      return;
    }
    if (this.state.zoom) {
      var zoom = !this.state.zoom;
      this.setState({
        zoom
      });
    } else if (this.state.expand) {
      if (e.target.className.includes('button')) {
        var expand = !this.state.expand;
        this.setState({
          expand
        });
      } else {
        var zoom = !this.state.zoom;
        this.setState({
          zoom
        });
      }
    } else {
      var expand = !this.state.expand;
      this.setState({
        expand
      });
    }
  }

  render() {

    let thumbnailCarousel;

    if (!this.state.zoom && !this.state.expand) {
      thumbnailCarousel = <ThumbnailCarousel imgs={this.state.thumbnailImgs} setMainImg={this.setMainImg} mainImg={this.state.mainImg}/>;
    } else if (!this.state.zoom) {
      thumbnailCarousel = <ThumbnailCarousel imgs={this.state.thumbnailImgs} setMainImg={this.setMainImg} mainImg={this.state.mainImg} expanded={true} />;
    }


    return (
      <div onClick={(e) => this.expandImg(e)} className={`overview-image-gallery${this.state.expand ? '-expand' : ''}`} data-testid='image-gallery'
      >
        {!this.state.zoom &&
        <div className={`overview-image-gallery-container${this.state.expand ? '-expand' : ''}`}>
          {!this.state.zoom && this.state.mainImg !== this.state.firstImg &&
          <button onClick={(e) => this.setMainImg(e, this.state.currentIndex - 1)} className={`overview-image-gallery-left-arrow${this.state.expand ? '-expand' : ''}`}>&#10140;</button>
          }
          <img
            rel='preload'
            src={this.state.mainImg}
            className={`overview-image-gallery-img${this.state.expand ? '-expand' : ''}`}>
          </img>
          {!this.state.zoom && this.state.mainImg !== this.state.lastImg &&
          <button onClick={(e) => this.setMainImg(e, this.state.currentIndex + 1)} className={`overview-image-gallery-right-arrow${this.state.expand ? '-expand' : ''}`}>&#10140;</button>
          }
          {!this.state.zoom &&
          <button onClick={(e) => this.expandImg(e)} className='overview-image-gallery-enlarge-button'>[]</button>
          }
        </div>
        }
        {this.state.zoom && <ZoomImg src={this.state.mainImg} />}
        {thumbnailCarousel}


      </div>
    );
  }
}

export default ImageGallery;
import React from 'react';
import ZoomImg from './zoomImg.jsx';
import ThumbnailCarousel from './thumbnailCarousel.jsx'

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
      //var expand = !this.state.zoom;
      this.setState({
        zoom
      });
    } else if (this.state.expand) {
      if (e.target.className.includes('button')) {
        var expand = !this.state.expand;
        this.setState({
          expand
        })
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

    let thumbnails;

    if (!this.state.zoom && !this.state.expand) {
      thumbnails = <ThumbnailCarousel imgs={this.state.thumbnailImgs} setMainImg={this.setMainImg} mainImg={this.state.mainImg}/>
      // thumbnails = <div className='overview-thumbnails'>
      //   {this.state.thumbnailImgs.slice(0, 6).map((img, key) => (
      //     <img
      //       onClick={(e) => this.setMainImg(e, key)}
      //       className={`overview-thumbnails-img${this.state.mainImg === img.url ? ' highlight' : ''}`}
      //       src={img.url}>
      //     </img>
      //   ))}
      // </div>;
    } else if (!this.state.zoom) {
      thumbnails = <ThumbnailCarousel imgs={this.state.thumbnailImgs} setMainImg={this.setMainImg} mainImg={this.state.mainImg} expanded={true} />;
      // thumbnails = <div className='overview-thumbnails'>
      //   {this.state.thumbnailImgs.slice(0, 6).map((img, key) => (
      //     <img
      //       onClick={(e) => this.setMainImg(e, key, img.url)}
      //       className={`overview-thumbnails-img${this.state.mainImg === img.url ? ' highlight' : ''}`}
      //       src={'https://static.vecteezy.com/system/resources/thumbnails/000/581/851/small/icon0-vector-104-01.jpg'}>
      //     </img>
      //   ))}
      // </div>;
    }


    return (
      <div onClick={(e) => this.expandImg(e)} className={`overview-image-gallery${this.state.expand ? '-expand' : ''}`} data-testid='image-gallery'>
        {!this.state.zoom &&
            <img
              src={this.state.mainImg}
              className={`overview-image-gallery-img${this.state.expand ? '-expand' : ''}`}>
            </img>
        }
        {this.state.zoom && <ZoomImg src={this.state.mainImg} />}
        {thumbnails}
        {!this.state.zoom && this.state.mainImg !== this.state.firstImg &&
          <button onClick={(e) => this.setMainImg(e, this.state.currentIndex - 1)} className='overview-image-gallery-left-arrow'>L</button>
        }
        {!this.state.zoom && this.state.mainImg !== this.state.lastImg &&
          <button onClick={(e) => this.setMainImg(e, this.state.currentIndex + 1)} className='overview-image-gallery-right-arrow'>R</button>
        }
        {!this.state.zoom &&
          <button onClick={(e) => this.expandImg(e)} className='overview-image-gallery-enlarge-button'>[]</button>
        }
      </div>
    );
  }
}

export default ImageGallery;
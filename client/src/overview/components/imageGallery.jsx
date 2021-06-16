import React from 'react';
import ZoomImg from './zoomImg.jsx'

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

  // componentDidUpdate() {
  //   //console.log('imagegallery',this.state)
  // }

  setMainImg(e, i) {
    e.preventDefault();
    var mainImg = e.target.src || this.props.photos[i].url;
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
      if(e.target.className.includes('button')) {
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

//need state for first and last picture
//display right arrow on fist img
//display left arrow on last img
//display both other wise


  render() {
    return (
      <div
        // style={{backgroundImage: `url(${this.state.mainImg})`}}
        onClick={(e) => this.expandImg(e)}
        className={`overview-image-gallery${this.state.expand ? '-expand' : ''}`} data-testid='image-gallery'>
        {!this.state.zoom &&
            <img
              src={this.state.mainImg}
              className={`overview-image-gallery-img${this.state.expand ? '-expand' : ''}`}>
            </img>
        }
        {this.state.zoom &&
        <ZoomImg src={this.state.mainImg} />
        }

        {!this.state.zoom &&
          <div className='overview-thumbnails'>
            {this.state.thumbnailImgs.slice(0, 7).map((img, key) => (
              <img
                onClick={(e) => this.setMainImg(e, key)}
                className={`overview-thumbnails-img${this.state.mainImg === img.url ? ' highlight' : ''}`}
                src={img.url}>
              </img>
            ))}
          </div>
        }
        {!this.state.zoom &&
          <button
            onClick={(e) => this.setMainImg(e, this.state.currentIndex - 1)} className='overview-image-gallery-left-arrow'>L</button>
        }
        {!this.state.zoom &&
          <button
            onClick={(e) => this.setMainImg(e, this.state.currentIndex + 1)} className='overview-image-gallery-right-arrow'>R</button>
        }
        {!this.state.zoom &&
          <button
            onClick={(e) => this.expandImg(e)} className='overview-image-gallery-enlarge-button'>[]</button>
        }
      </div>
    );
  }
}

export default ImageGallery;
import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import Review from './review/review.jsx';
import ProductOverview from './overview/overview.jsx';
import QuestionApp from './questions/QuestionApp.jsx';
class Home extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    let id = params.get('product');
    id = id === null ? 22122 : id;
    this.state = {
      id: id,
      colorTheme: 'Light'
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }


  toggleTheme(e) {
    // light mode
    if (!e.target.checked) {
      this.setState({ colorTheme: 'Light' });
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--font-color', '#000');
      document.documentElement.style.setProperty('--primary-color', '#5E81AC');
      document.documentElement.style.setProperty('--primary-color-hover', '#81A1C1');
      document.documentElement.style.setProperty('--header-color', 'forestgreen');
      document.documentElement.style.setProperty('--image-container', '#cfe3cf');
      document.documentElement.style.setProperty('--image-container-buttons', 'grey');
      document.documentElement.style.setProperty('--style-title', 'grey');
      document.documentElement.style.setProperty('--feature-check', 'forestgreen');
      return;
    }
    // dark mode
    this.setState({ colorTheme: 'Dark' });
    document.documentElement.style.setProperty('--background-color', '#3B4252');
    document.documentElement.style.setProperty('--font-color', '#fff');
    document.documentElement.style.setProperty('--primary-color', '#EBCB8B');
    document.documentElement.style.setProperty('--primary-color-hover', '#D08770');
    document.documentElement.style.setProperty('--header-color', '#405c7d');
    document.documentElement.style.setProperty('--image-container', '#405c7d');
    document.documentElement.style.setProperty('--image-container-buttons', '#CDCDCD');
    document.documentElement.style.setProperty('--style-title', 'lightgrey');
    document.documentElement.style.setProperty('--feature-check', '#fff');
  }

  render() {
    return (
      <div>
        <div className='timpani-header'>
          <div className='timpani-logo'>
            <img className='timpani-logo-img' src="https://img.icons8.com/ios/50/000000/timpani.png" alt='timpani-logo'/>
            <h1 className='timpano-trading-co'>Timpano Trading Co.</h1>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={this.toggleTheme} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.state.colorTheme}</label>
          </div>
        </div>
        <ProductOverview id={this.state.id}/>
        <RelatedProducts item={this.state.id}/>
        <QuestionApp product_id={this.state.id}/>
        <Review id={this.state.id} />
      </div>
    );
  }
}

export default Home;


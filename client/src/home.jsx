import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import Review from './review/review.jsx';
import ProductOverview from './overview/overview.jsx';
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
      return;
    }
    // dark mode
    this.setState({ colorTheme: 'Dark' });
    document.documentElement.style.setProperty('--background-color', '#3B4252');
    document.documentElement.style.setProperty('--font-color', '#fff');
    document.documentElement.style.setProperty('--primary-color', '#EBCB8B');
    document.documentElement.style.setProperty('--primary-color-hover', '#D08770');
  }

  render() {
    return (
      <div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={this.toggleTheme} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.state.colorTheme}</label>
        </div>
        <ProductOverview />
        <RelatedProducts item={this.state.id}/>
        <Review id={this.state.id} />
      </div>
    );
  }
}

export default Home;


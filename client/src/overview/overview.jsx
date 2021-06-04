import React from 'react';
import axios from 'axios';
import config from '../../../config.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getProductPage() {
    axios({
      method: 'get',
      url: '/product',
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err, 'whyyyyy'));

  }

  render() {
    return (
      <div>
        <p>This will be the Overview component!!</p>
        <button onClick={() => this.getProductPage()}>Test</button>
      </div>
    );
  }
}

export default Overview;
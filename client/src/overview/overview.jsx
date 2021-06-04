import React from 'react';
import axios from 'axios';
import config from '../../../config.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testClick() {
    axios({
      method: 'get',
      url: '/test',
    })
      .then(res => console.log(res))
      .catch(err => console.log(err, 'whyyyyy'));

  }

  render() {
    return (
      <div>
        <p>This will be the Overview component!</p>
        <button onClick={() => this.testClick()}>Test</button>
      </div>
    );
  }
}

export default Overview;
const config = require('../../config.js');
const axios = require('axios');

const BASE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products';
const AUTH = {'Authorization': `${config.TOKEN}`};

module.exports = {
  getOneProduct: (callback) => {
    axios({
      method: 'GET',
      url: BASE_URL,
      headers: AUTH,
      params: {
        page: 1,
        count: 1
      }
    })
      .then(products => callback(products))
      .catch(err => console.log(err));
  },
  getProductStyles: (id, callback) => {
    axios({
      method: 'GET',
      url: BASE_URL + `/${id}/styles`,
      headers: AUTH
    })
      .then(styles => callback(styles))
      .catch(err => console.log(err));
  },
  getProductInfo: (id, callback) => {
    axios({
      method: 'GET',
      url: BASE_URL + `/${id}`,
      headers: AUTH
    })
      .then(info => callback(info))
      .catch(err => console.log(err));
  }

};
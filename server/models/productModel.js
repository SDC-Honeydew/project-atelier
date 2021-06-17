const config = require('../../config.js');
const axios = require('axios');

const BASE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products';
const AUTH = {'Authorization': `${config.TOKEN}`};

module.exports = {
  getModuleInfo: (id, callback) => {
    var relevantInfo;
    axios({
      method: 'GET',
      url: BASE_URL + `/${id}`,
      headers: AUTH,
    })
      .then(product => {
        relevantInfo = product.data;
        axios({
          method: 'GET',
          url: BASE_URL + `/${id}/styles`,
          headers: AUTH
        })
          .then(styles => {
            relevantInfo['styles'] = styles.data.results;
          })
          .then(() => {
            callback(relevantInfo);
          })
          .catch(err => {
            console.log('error at call to styles??????????', err);
          });
      })
      .catch(err => {
        console.log('error at call to product', err);
      });
  }
};
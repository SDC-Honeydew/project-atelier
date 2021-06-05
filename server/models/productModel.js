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
  },
  getModuleInfo: (callback) => {
    var relevantInfo = {};
    axios({
      method: 'GET',
      url: BASE_URL,
      headers: AUTH,
      params: {
        page: 1,
        count: 1
      }
    })
      .then(product => {
        //console.log(product)
        relevantInfo = product.data[0];
        var id = product.data[0].id;
        axios({
          method: 'GET',
          url: BASE_URL + `/${id}/styles`,
          headers: AUTH
        })
          .then(styles => {
            //console.log('style data', styles.data.results)
            relevantInfo['results'] = styles.data.results;
          })
          .then(() => {
            axios({
              method: 'GET',
              url: BASE_URL + `/${id}`,
              headers: AUTH
            })
              .then(productInfo => {
                relevantInfo['features'] = productInfo.data.features;
              })
              .then(() => {
                //console.log(relevantInfo)
                callback(relevantInfo);
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log('Error in styles call', err));
      })
      .catch(err => console.log(err));
  }

};
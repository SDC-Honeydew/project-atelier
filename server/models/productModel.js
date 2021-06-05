const config = require('../../config.js');
const axios = require('axios')
module.exports = {
  getOneProduct: (callback) => {
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      params: {
        page: 1,
        count: 1
      }
    })
      .then(products => callback(products))
      .catch(err => console.log(err));
  }
};
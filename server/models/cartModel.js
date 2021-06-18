const config = require('../../config.js');
const axios = require('axios');

const BASE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart';
const AUTH = {'Authorization': `${config.TOKEN}`};

module.exports = {
  addItemToCart: (sku_id, count) => {
    axios({
      method: 'POST',
      url: BASE_URL,
      headers: AUTH,
      data: {sku_id, count}
    })
      .then(res => console.log(res.status))
      .catch(err => console.log('Error posting data: ', err))
  }
}
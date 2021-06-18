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
      params: {sku_id}
    })
      .then(res => res.sendStatus(201))
      .catch(err => console.log('Error posting data: ', err))
  }
}
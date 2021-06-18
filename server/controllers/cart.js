const axios = require('axios');
const config = require('../../config.js');
const Models = require('../models');

const BASE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart';
const AUTH = {'Authorization': `${config.TOKEN}`};

module.exports = {
  getCart: (req, res) => {
    axios({
      method: 'GET',
      url: BASE_URL,
      headers: AUTH
    })
      .then(cart => res.send(cart.data))
      .catch(()=> 'ERROR in controller');
  },
  addItemToCart: (req, res) => {
    var sku_id = Number(req.query.sku_id);
    var count = Number(req.query.count);
    Models.cart.addItemToCart(sku_id, count);
  }
}
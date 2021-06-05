const axios = require('axios');
const config = require('../../config.js');
const Models = require('../models');


module.exports = {
  returnOneProduct: (req, res) => {
    Models.products.getOneProduct((product) => {
      if (product) {
        res.send(product.data);
      }
    });
  },

};
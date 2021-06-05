const axios = require('axios');
const config = require('../../config.js');
const Models = require('../models')


module.exports = {
  returnOneProduct: (req, res) => {
    Models.productModels.getOneProduct((product) => {
      if (product) {
        res.send(product.data)
      }
    })
  },

};
const axios = require('axios');
const config = require('../../config.js');
const Models = require('../models');


module.exports = {
  getOneProduct: (req, res) => {
    Models.products.getOneProduct((product) => {
      if (product) {
        res.send(product.data);
      }
    });
  },
  getStyles: (req, res) => {
    //need to figure out how to send id
    //send as prewritten url string?
    Models.products.getProductStyles(1, (styles) => {
      if (styles) {
        res.send(styles.data);
      }
    });
  },
  getProductInfo: (req, res) => {
    Models.products.getProductInfo(22122, (info) => {
      if (info) {
        res.send(info.data);
      }
    });
  },
  getRelevantInfo: (req, res) => {
    Models.products.getModuleInfo(info => {
      if (info) {
        res.send(info);
      } else {
        console.log('could not send info');
      }
    });
  }
};
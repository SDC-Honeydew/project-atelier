const axios = require('axios');
const config = require('../../config.js');
const Models = require('../models');


module.exports = {
  getRelevantInfo: (req, res) => {
    var id = req.query.id;
    Models.products.getModuleInfo(id, info => {
      if (info) {
        res.send(info);
      } else {
        console.log('could not send info');
      }
    });
  }
};
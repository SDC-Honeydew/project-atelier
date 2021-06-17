const axios = require('axios');
const config = require('../../config.js');
const Models = require('../models');


module.exports = {
  // getOneProduct: (req, res) => {
  //   Models.products.getOneProduct((product) => {
  //     if (product) {
  //       res.send(product.data);
  //     }
  //   });
  // },
  // getStyles: (req, res) => {
  //   //need to figure out how to send id
  //   //send as prewritten url string?
  //   Models.products.getProductStyles(1, (styles) => {
  //     if (styles) {
  //       res.send(styles.data);
  //     }
  //   });
  // },
  // getProductInfo: (req, res) => {
  //   Models.products.getProductInfo(22122, (info) => {
  //     if (info) {
  //       res.send(info.data);
  //     }
  //   });
  // },
  getRelevantInfo: (req, res) => {
    var id = req.query.id;
    console.log('id param passed from clinet', id)
    Models.products.getModuleInfo(id, info => {
      if (info) {
        res.send(info);
      } else {
        console.log('could not send info');
      }
    });
  }
  // getOnePage: (req, res) => {
  //   console.log(req.query);
  //   axios({
  //     method: 'get',
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
  //     headers: {
  //       'Authorization': `${config.TOKEN}`
  //     },
  //     params: {
  //       page: 1
  //     }
  //   })
  //     .then(products => res.send(products.data))
  //     .catch(err => console.log('err'));
  // }
};
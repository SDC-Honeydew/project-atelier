const axios = require('axios');
const config = require('../../config.js');


module.exports = {
  getRelatedProducts: (req, res) => {
    console.log(req.query);
    res.send('You hit the endpoint, but we\'re currently out of order!');
    // axios({
    //   method: 'get',
    //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
    //   headers: {
    //     'Authorization': `${config.TOKEN}`
    //   },
    //   params: {
    //     page: 1
    //   }
    // })
    //   .then(products => res.send(products.data))
    //   .catch(err => console.log(err));
  }
};
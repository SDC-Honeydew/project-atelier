const axios = require('axios');
const config = require('../../config.js');


module.exports = {
  getRelatedProducts: (req, res) => {
    // get list of related products
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.query.item}/related`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    // for each product
    }).then(response => console.log(response.data)).catch(err => console.log(err));
      //do a request to the ID
      //add the ID, name, category, features to an object

      //do a request to the style
      //ad the original price, sale price, and photo from the default style to the object

      //do a request to reviews
      //add the average rating for that item to the object
  }
};
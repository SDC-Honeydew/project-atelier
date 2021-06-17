const axios = require('axios');
const config = require('../../config.js');


module.exports = {
  getReviewsForOneProduct: (req, res) => {
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      params: {
        'product_id': `${req.query.id}`
      }
    })
      .then(reviews => res.send(reviews.data))
      .catch(err => console.log('err'));
  }
};
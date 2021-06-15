const axios = require('axios');
const config = require('../../config.js');


module.exports = {
  getReviewsForOneProduct: (req, res) => {
    var data = {};
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
      .then(reviews => {
        data.reviews = reviews.data;
        return axios({
          method: 'get',
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta',
          headers: {
            'Authorization': `${config.TOKEN}`
          },
          params: {
            'product_id': `${req.query.id}`
          }
        });
      })
      .then(meta => {
        data.meta = meta.data;
        res.send(data);
      })
      .catch(err => console.log(err));
  },
  addReview: (req, res) => {
    var data = req.body;
    const charIds = ['74288', '74289', '74287', '74286'];
    for (var charId of charIds) {
      data.characteristics[charId] = Number(data.characteristics[charId]);
    }
    data.rating = Number(data.rating);
    data.product_id = Number(data.product_id);
    data.recommend = data.recommend === 'on';

    console.log(data);
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      params: data
    }).
      then(response => {
        console.log(response);
        res.end();
      });
  }

};
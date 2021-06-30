const axios = require('axios');
const config = require('../../config.js');


module.exports = {
  getReviewsForOneProduct: (req, res) => {
    console.log(req.query.id);
    var data = {};
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      params: {
        'product_id': `${req.query.id}`,
        'count': 40
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
    if (data.photos === undefined) {
      data.photos = [];
    }
    console.log(data);
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      data: data
    }).
      then(response => {
        console.log(response);
        res.send(response);
      });
  },
  markReviewHelpful: (req, res) => {
    const review_id = Number(req.body.review_id);
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/helpful`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    }).
      then(response => {
        console.log('success markhelpful');
        res.send('sucess');
        res.end();
      })
      .catch(err => { console.log('err'); });
  },

  reportReview: (req, res) => {
    const review_id = Number(req.body.review_id);
    console.log(review_id);

    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/report`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    }).
      then(response => {
        console.log(response);
      })
      .catch(err => { console.log('err'); });
  }

};
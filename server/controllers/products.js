const axios = require('axios');


module.exports = {
  getOnePage: (req, res) => {
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      params: {
        page: 2
      }
    })
      .then(data => res.send(data))
      .catch(err => console.log(err));
  }
};
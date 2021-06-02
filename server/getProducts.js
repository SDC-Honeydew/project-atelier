const axios = require('axios')
const config = require('../config.js')

getProducts = (callback) => {

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
  .then(res => callback(res))
  .catch(err => console.log(err))
}


module.exports = {
  getProducts
}
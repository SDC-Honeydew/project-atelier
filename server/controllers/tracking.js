const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  postInteraction: (req, res) => {
    var data = {element: req.body.element, widget: req.body.widget, time: req.body.time}

    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions`,
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      data: data
    }).then(response => {
        console.log('made it to then')
        res.send(response.data);
      }).catch(err => console.log(err, 'err in post Interaction'));
  }
};
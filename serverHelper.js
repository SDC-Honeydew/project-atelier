
import $ from 'jquery';
import TOKEN from './config.js';


  // const options = {
  //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${this.props.product_id}&page=${this.state.page}&count=${this.state.count}`,
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // };

var getQuestions = (productID, page, count, callback) => {
    // var options = {
    //   key: TOKEN,
    // };

    $.ajax({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productID}&page=${page}&count=${count}`,
      headers: {
        'Authorization': `token ${TOKEN}`
      },
      success: function(data) {
        callback(data.items);
      }
  })
};


export default getQuestions;
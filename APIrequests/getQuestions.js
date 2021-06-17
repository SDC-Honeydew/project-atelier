

import axios from 'axios';
import TOKEN from '../config.js';



var getQuestions = async (productID, page, count) => {

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productID}&page=${page}&count=${count}`

  axios.defaults.headers.common['Authorization'] = TOKEN;

  try {
    const resp = await axios.get(url);
      return resp
  }
  catch (err) {
    return err
  }
};

export default getQuestions;

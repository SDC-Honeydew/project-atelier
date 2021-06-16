

import axios from 'axios';
import TOKEN from '../config.js';


var getAnswers = async (questionID, page, count, callback) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionID}/answers`
  axios.defaults.headers.common['Authorization'] = TOKEN;
  try {
    const resp = await axios.get(url);
    return resp;
  }
  catch (err) {
    console.log('catch block')
    return err
  }
}



export default getAnswers;
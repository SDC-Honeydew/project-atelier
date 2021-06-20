import axios from 'axios';
import TOKEN from '../config.js';



var postQuestion = async (data) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`

  axios.defaults.headers.common['Authorization'] = TOKEN;

  try {
    console.log('data sent to post', data)
    const resp = await axios.post(url, data);
    console.log(resp, "response in postQuestion")
    return resp
  }
  catch (err) {
    console.log(err, 'err after post')
    return err
  }
};

export default postQuestion;
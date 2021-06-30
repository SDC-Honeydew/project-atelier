
import axios from 'axios';
import TOKEN from '../../config.js';



var markQuestionHelpful = async (questionID) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionID}/helpful`

  axios.defaults.headers.common['Authorization'] = TOKEN;

  try {
    const resp = await axios.put(url);
      return resp
  }
  catch (err) {
    return err
  }
};

export default markQuestionHelpful;
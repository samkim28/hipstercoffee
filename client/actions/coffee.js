import { FETCH_COFFEE } from './types';
import axios from 'axios';

export function fetchCoffee(input) {
  console.log('input: ', input);
  const data = {
    params: {
      input: input
    }
  };
  return axios.get('/search', data)
    .then(checkStatus)
    .then((response) => {
      return { type: FETCH_COFFEE, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}

function checkStatus(response) {
  if(response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

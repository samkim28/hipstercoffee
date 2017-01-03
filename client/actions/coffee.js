import { FETCH_COFFEE } from './types';
import axios from 'axios';
import { checkStatus } from './utilities';

export function fetchCoffee(input) {
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

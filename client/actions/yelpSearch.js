import { FETCH_YELP_STORES } from './types';
import axios from 'axios';
import { checkStatus } from './utilities';

export function fetchYelpStores(input) {
  const data = {
    params: {
      input: input
    }
  };
  return axios.get('/search', data)
    .then(checkStatus)
    .then((response) => {
      return { type: FETCH_YELP_STORES, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}

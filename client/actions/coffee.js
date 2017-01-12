import { FETCH_COFFEE, ADD_STORE } from './types';
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

export function addStore(storeName) {
  const data = {
    name: storeName
  }
  return axios.post('/addstore', data)
    .then(checkStatus)
    .then((response) => {
      return { type: ADD_STORE, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}

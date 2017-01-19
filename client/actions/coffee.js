import { FETCH_COFFEE, ADD_STORE, FETCH_STORES } from './types';
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

export function addStore(store) {
  const data = {
    name: store.name,
    yelp_id: store.id
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

export function fetchStores() {
  return axios.get('/fetchstores')
  .then(checkStatus)
  .then((response) => {
    return { type: FETCH_STORES, payload: response.data }
  })
  .catch((error) => {
    console.error(error);
  });
}

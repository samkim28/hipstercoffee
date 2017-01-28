import { FETCH_COFFEE, ADD_STORE, FETCH_ALL_STORES, FETCH_STORE } from './types';
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

export function fetchAllStores() {
  return axios.get('/fetchallstores')
  .then(checkStatus)
  .then((response) => {
    return { type: FETCH_ALL_STORES, payload: response.data }
  })
  .catch((error) => {
    console.error(error);
  });
}

export function fetchStore(store_id) {
  const data = {
    params: {
      store_id: store_id
    }
  }
  return axios.get('/fetchstore', data)
  .then(checkStatus)
  .then((response) => {
    console.log('response: ', response)
    return { type: FETCH_STORE, payload: response.data }
  })
  .catch((error) => {
    console.error(error);
  });
}

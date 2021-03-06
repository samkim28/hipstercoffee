import { ADD_STORE, FETCH_ALL_STORES, FETCH_STORE } from './types';
import axios from 'axios';
import { checkStatus } from './utilities';

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

export function fetchStore(yelp_id) {
  const data = {
    params: {
      yelp_id: yelp_id
    }
  }
  return axios.get('/fetchstore', data)
  .then(checkStatus)
  .then((response) => {
    return { type: FETCH_STORE, payload: response.data }
  })
  .catch((error) => {
    console.error(error);
  });
}

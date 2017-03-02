import { ADD_REVIEW, FETCH_REVIEWS } from './types';
import axios from 'axios';
import { checkStatus } from './utilities';

export function addReview(input) {
  const data = {
    username: input.username,
    review: input.review,
    yelp_id: input.yelp_id,
    user_id: input.user_id,
    store_id: input.store_id
  }
  return axios.post('/addreview', data)
    .then(checkStatus)
    .then((response) => {
      return { type: ADD_REVIEW, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function fetchReviews(storeID) {
  const data = {
    params: {
      store_id: storeID
    }
  };
  return axios.get('/fetchreviews', data)
    .then(checkStatus)
    .then((response) => {
      return { type: FETCH_REVIEWS, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}

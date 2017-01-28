import { FETCH_YELP_STORES, ADD_STORE, FETCH_ALL_STORES } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_YELP_STORES:
      return { ...state, data: action.payload }
    case ADD_STORE:
      return { ...state, store: action.payload }
    case FETCH_ALL_STORES:
      return { ...state, storeList: action.payload }
    default:
      return state;
  }
}

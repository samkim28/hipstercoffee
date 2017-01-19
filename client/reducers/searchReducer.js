import { FETCH_COFFEE, ADD_STORE, FETCH_STORES } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COFFEE:
      return { ...state, data: action.payload }
    case ADD_STORE:
      return { ...state, store: action.payload }
    case FETCH_STORES:
      return { ...state, storeList: action.payload }
    default:
      return state;
  }
}

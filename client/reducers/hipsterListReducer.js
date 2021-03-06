import { FETCH_ALL_STORES } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_ALL_STORES:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}

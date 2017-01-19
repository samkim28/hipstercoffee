import { FETCH_STORES } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_STORES:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}

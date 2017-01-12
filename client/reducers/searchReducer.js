import { FETCH_COFFEE, ADD_STORE } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COFFEE:
      return { ...state, data: action.payload }
    case ADD_STORE:
      return { ...state, store: action.payload }
    default:
      return state;
  }
}

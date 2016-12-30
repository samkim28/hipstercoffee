import { FETCH_COFFEE } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COFFEE:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}

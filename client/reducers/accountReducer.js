import { SIGN_UP, SIGN_IN, AUTH_ERROR, RESET_ERROR } from '../actions/types';

export default function(state = null, action) {
  switch(action.type){
    case SIGN_UP:
      return { ...state, currentUser: action.payload }
    case SIGN_IN:
      return { ...state, authorized: action.payload }
    case AUTH_ERROR:
      return { ...state, error: action.payload.msg }
    case RESET_ERROR:
      return { ...state, error: null}
    default:
      return state;
  }
}

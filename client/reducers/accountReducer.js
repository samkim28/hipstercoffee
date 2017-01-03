import { SIGN_UP } from '../actions/account';

export default function(state = null, action) {
  switch(action.type){
    case SIGN_UP:
      return { ...state, currentUser: action.payload}
    default:
      return state;
  }
}

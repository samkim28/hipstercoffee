import { ADD_REVIEW, FETCH_REVIEWS } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case ADD_REVIEW:
      return { ...state, data: action.payload }
    case FETCH_REVIEWS:
      return { ...state, shopReviews: action.payload }
    default:
      return state;
  }
}

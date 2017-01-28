import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AccountReducer from './accountReducer';
import HipsterListReducer from './hipsterListReducer';
import ReviewsReducer from './reviewsReducer';
import IndividualStoreReducer from './individualStoreReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  account: AccountReducer,
  hipsterList: HipsterListReducer,
  review: ReviewsReducer,
  individualStore: IndividualStoreReducer
});

export default rootReducer;

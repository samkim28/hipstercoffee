import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AccountReducer from './accountReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  account: AccountReducer
});

export default rootReducer;

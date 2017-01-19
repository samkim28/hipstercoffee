import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AccountReducer from './accountReducer';
import HipsterListReducer from './hipsterListReducer';
import ShopReducer from './shopReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  account: AccountReducer,
  hipsterList: HipsterListReducer,
  review: ShopReducer
});

export default rootReducer;

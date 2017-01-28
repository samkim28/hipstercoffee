import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AccountReducer from './accountReducer';
import HipsterListReducer from './hipsterListReducer';
import ShopReducer from './shopReducer';
import IndividualStoreReducer from './individualStoreReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  account: AccountReducer,
  hipsterList: HipsterListReducer,
  review: ShopReducer,
  individualStore: IndividualStoreReducer
});

export default rootReducer;

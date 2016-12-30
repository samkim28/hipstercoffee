import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';

const rootReducer = combineReducers({
  search: SearchReducer
});

export default rootReducer;

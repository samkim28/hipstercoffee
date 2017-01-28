import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reducers from './reducers/rootReducer';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Splash from './components/splash';
import SignUp from './components/signup';
import ShopPage from './components/shopPage';
import HipsterList from './components/hipsterList';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers, applyMiddleware(logger));

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);

    let returnValue = next(action);

    console.log('state after dispatch', getState());

    return returnValue;
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ Splash } />
      <Route path='/home' component={ App } />
      <Route path='/signup' component={ SignUp } />
      <Route path='/shoppage/:id/:name' component={ ShopPage } />
      <Route path='/hipsterlist' component={ HipsterList } />
    </Router>
  </Provider>, document.getElementById('main'));

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import reducers from './reducers/rootReducer';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

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
      <Route path='/' component={ App } />
    </Router>
  </Provider>, document.getElementById('main'));

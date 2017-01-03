import { SIGN_UP, SIGN_IN, AUTH_ERROR, RESET_ERROR } from './types';
import axios from 'axios';
import { checkStatus } from './utilities';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';

export function signUp(input) {
  const data = {
    username: input.username,
    password: input.password
  };
  return axios.post('/signup', data)
    .then(checkStatus)
    .then((response) => {
      Cookies.set('username', response.data.user.username);
      browserHistory.push('/home');
      return { type: SIGN_UP, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function signIn(input) {
  const data = {
    username: input.username,
    password: input.password
  };
  return axios.post('/signin', data)
    .then(checkStatus)
    .then((response) => {
      if(response.data.msg) {
        return { type: AUTH_ERROR, payload: response.data }
      } else {
      Cookies.set('username', response.data.user.username);
      browserHistory.push('/home');
      return { type: SIGN_IN, payload: response.data }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function resetError() {
  return new Promise((resolve, reject) => {
    resolve({ type: RESET_ERROR });
  });
}

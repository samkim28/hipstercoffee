import { SIGN_UP } from './types';
import axios from 'axios';
import { checkStatus } from './utilities';

export function signUp(input) {
  console.log('input: ', input);
  const data = {
    username: input.username,
    password: input.password
  };
  return axios.post('/signup', data)
    .then(checkStatus)
    .then((response) => {
      return { type: SIGN_UP, payload: response.data }
    })
    .catch((error) => {
      console.error(error);
    });
}

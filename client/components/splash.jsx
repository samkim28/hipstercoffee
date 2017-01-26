import React, {Component} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import SignUp from './signup'
import SignIn from './signin'

export default class Splash extends Component {
  render() {
    return (
      <div>
        <SignIn />
      </div>
    )
  }
}

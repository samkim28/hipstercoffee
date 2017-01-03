import React, { Component } from 'react';
import Search from './search';
import ResultsList from './resultsList';
import SignUp from './signup';
import { connect } from 'react-redux'
import Cookies from 'js-cookie';

export default class App extends Component {

	render() {
		const user = Cookies.get('username');

		return (
      <div className='container'>
        <h1 className='center'>hipster coffee</h1>
				<h3>Welcome, {user}!</h3>
        <Search />
        <ResultsList />
      </div>
		)
	}
}

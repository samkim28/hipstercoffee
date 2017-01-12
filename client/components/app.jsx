import React, { Component } from 'react';
import Search from './search';
import ResultsList from './resultsList';
import SignUp from './signup';
import { connect } from 'react-redux'
import Cookies from 'js-cookie';
import HipsterList from './hipsterList';

export default class App extends Component {

	render() {
		const user = Cookies.get('username');

		return (
      <div className='container'>
        <h1 className='center'>hipster coffee</h1>
				<h3>Welcome, {user}!</h3>
        <Search />
				<div className='row'>
	        <ResultsList className='col-md-6' />
					<HipsterList className='col-md-6' />
				</div>
      </div>
		)
	}
}

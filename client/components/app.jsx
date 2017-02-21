import React, { Component } from 'react';
import Search from './search';
import ResultsList from './resultsList';
import SignUp from './signup';
import { connect } from 'react-redux'
import Cookies from 'js-cookie';
import NavBar from './navbar';

export default class App extends Component {

	render() {
		const user = Cookies.get('username');

		return (
      <div className='container'>
			<NavBar />
				<div className='row'>
					<h3>Welcome, {user}!</h3>
				</div>
				<div className="row">
					<div className="col-md-6"><Search /></div>
					<div className="col-md-6"></div>
		    </div>
				<div className="row">
					<div className="col-md-6"><ResultsList /></div>
					<div className="col-md-6"></div>
		    </div>
			</div>
		)
	}
}

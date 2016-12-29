import React, { Component } from 'react';
import Search from './search';

export default class App extends Component {

	render() {

		return (
      <div className='container'>
        <h1 className='center'>hipster coffee</h1>
        <Search />
      </div>
		)
	}
}

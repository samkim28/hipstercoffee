import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchReviews } from '../actions/shop';
import Review from './review';
import Cookies from 'js-cookie';

export default class HipsterResult extends Component {

	render(){
		return(
			<div>
		   	<h3>
		    	<Link to={`/shoppage/${this.props.result._id}/${this.props.result.name}`}>{this.props.result.name}</Link>
		    </h3>
				<div>
			  	Likes: {this.props.result.likes}
			  </div>
	   </div>
		)
	}
}

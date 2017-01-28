import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchReviews } from '../actions/shop';
import Review from './review';
import ReviewBox from './reviewBox';

class HipsterResult extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		this.props.fetchReviews(this.props.result._id);
	}

	render(){

		if(!this.props.shop) {
			return (
			<div>
				<h3><Link to={`/shoppage/${this.props.result.yelp_id}`}>{this.props.result.name}</Link></h3>
				<ReviewBox />
				<div>
					Reviews: No reviews yet. Be the first!
				</div>
				<div>
					Likes: {this.props.result.likes}
				</div>
     </div>
			)
		} else {
			const shopReviews = this.props.shop.shopReviews.map((review, idx) => <Review review={review} key={idx} />);
			return (
				<div>
		      <h3><Link to={`/shoppage/${this.props.result.yelp_id}`}>{this.props.result.name}</Link></h3>
					<ReviewBox />
		      <div>
		        Reviews: {shopReviews}
		      </div>
		      <div>
		        Likes: {this.props.result.likes}
		      </div>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
  return {
    shop: state.review
  }
}

export default connect(mapStateToProps, { fetchReviews })(HipsterResult);

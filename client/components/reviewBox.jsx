import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { addReview, fetchReviews } from '../actions/storeReviews';


class ReviewBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: Cookies.get('username'),
      review: '',
      user_id: Cookies.get('user_id'),
      store_id: Cookies.get('store_id')
    }
    this.addReview = this.addReview.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

  }

  addReview(e) {
    e.preventDefault();
    this.props.addReview(this.state)
    .then(()=> {
      this.props.fetchReviews(this.state.store_id);
    });
  }

  handleTextAreaChange(e) {
    this.setState({review: e.target.value})
  }

  render() {

    return (
      <div>
      <textarea form ="review" name="reviewbox" id="reviewid" cols="35" wrap="soft" onChange={ this.handleTextAreaChange }></textarea>
        <form id="review" onSubmit={this.addReview}>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addReview, fetchReviews })(ReviewBox);

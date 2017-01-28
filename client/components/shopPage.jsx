import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { Link } from 'react-router';
import Review from './review';
import ReviewBox from './reviewBox';
import Cookies from 'js-cookie';
import { fetchReviews } from '../actions/storeReviews';
import { fetchStore } from '../actions/hipsterStores';


class ShopPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchStore(this.props.params.id);
    this.props.fetchReviews(this.props.params.id);
    Cookies.set('store_id', this.props.params.id);
  }

  componentWillUnmount(){
    Cookies.remove('store_id');
  }

  render(){
    if(!this.props.storeData || !this.props.shop) {
      return (
      <div>
        <h3>{this.props.params.name}</h3>
        <div>
          Reviews: No reviews yet. Be the first!
        </div>
        <div>
        </div>
     </div>
      )
    } else {
      const shopReviews = this.props.shop.shopReviews.map((review, idx) => <Review review={review} key={idx} />);
      return (
        <div>
          <h3>{this.props.storeData.data.name}</h3>
          <ReviewBox />
          <div>
            Reviews: {shopReviews}
          </div>
          <div>
            Likes: {this.props.storeData.data.likes}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    shop: state.review,
    storeData: state.individualStore
  }
}

export default connect(mapStateToProps, { fetchReviews, fetchStore })(ShopPage);

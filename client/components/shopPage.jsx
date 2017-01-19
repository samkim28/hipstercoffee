import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { Link } from 'react-router';
import Result from './result';
import ReviewBox from './reviewBox';
import Cookies from 'js-cookie';


class ShopPage extends Component {

  render(){
    let shopName = "";
    for(let i = 0; i < this.props.data.storeList.length; i++){
      if(this.props.data.storeList[i].yelp_id === this.props.params.id) {
        shopName = this.props.data.storeList[i].name;
      }
    }

    console.log('cookies;', Cookies.get('user_id'));

    return (
      <div>
        <h1>
        { shopName }
        </h1>
        <ReviewBox />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state inside shop page: ', state);
  return {
    data: state.search
  }
}

export default connect(mapStateToProps, {})(ShopPage);

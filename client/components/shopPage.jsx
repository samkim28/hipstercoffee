import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { Link } from 'react-router';
import Result from './result';
import ReviewBox from './reviewBox';


class ShopPage extends Component {

  render(){
    let pageData = undefined;
    for(let i = 0; i < this.props.data.length; i++){
      if(this.props.data[i].id === this.props.params.id){
        pageData = this.props.data[i];
      }
    }

    return (
      <div>
        <h1>
        {pageData.name}
        </h1>
        <ReviewBox />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.search.data.businesses
  }
}

export default connect(mapStateToProps, {})(ShopPage);

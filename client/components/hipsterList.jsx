import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../actions/coffee';
// import Search from './search';
import { Link } from 'react-router';
// import Result from './result';
import HipsterResult from './individualHipsterShop';


class HipsterList extends Component {

  componentWillMount(){
    this.props.fetchStores();
  }
  render(){
    if(!this.props.storeList) {
      return (
        <div>
          No Hipster Approved Coffee Shops
        </div>
      )
    }
    else if(this.props.storeList) {
      const results = this.props.storeList.data.map((result, idx) => <HipsterResult result={result} key={idx} />);
      return (
        <div>
          {results}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    storeList: state.hipsterList
  }
}

export default connect(mapStateToProps, { fetchStores })(HipsterList);

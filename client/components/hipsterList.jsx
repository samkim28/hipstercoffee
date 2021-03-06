import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStores } from '../actions/hipsterStores';
// import Search from './search';
import { Link } from 'react-router';
// import Result from './result';
import HipsterResult from './individualHipsterShop';
import NavBar from './navbar';



class HipsterList extends Component {

  componentWillMount(){
    this.props.fetchAllStores();
  }
  render(){
    if(!this.props.storeList) {
      return (
        <div>
        <NavBar />
          No Hipster Approved Coffee Shops
        </div>
      )
    }
    else if(this.props.storeList) {
      const results = this.props.storeList.data.map((result, idx) => <HipsterResult result={result} key={idx} />);
      return (
        <div>
        <NavBar />
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

export default connect(mapStateToProps, { fetchAllStores })(HipsterList);

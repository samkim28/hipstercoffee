import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchCoffee } from '../actions/coffee';
// import Search from './search';
import { Link } from 'react-router';
// import Result from './result';


export default class HipsterList extends Component {
  render(){
      return (
        <div>
          <h1>
          No hipster approved coffee shops
          </h1>
        </div>
      )
    }
  }


// export default connect(mapStateToProps, { fetchCoffee })(HipsterList);

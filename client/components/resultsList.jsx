import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoffee } from '../actions/coffee';
import Search from './search';
import { Link } from 'react-router';
import Result from './result';


class ResultsList extends Component {
  render(){
    if(!this.props.data) {
      console.log('!thisprops dtata: ', this.props.data);
      return (
        <div className='center'>
          <Link to={'/'}>
Nothing yet          </Link>
        </div>
      )
    }
     else if(this.props.data) {
      const results = this.props.data.data.businesses.map((result, idx) => <Result result={ result } key={ idx } />);
      console.log('this props data: ', this.props.data)
      return (
        <div className='center'>
{results}
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  console.log('stateL ', state);
  return {
    data: state.search
  }
}

export default connect(mapStateToProps, { fetchCoffee })(ResultsList);

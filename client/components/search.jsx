import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoffee } from '../actions/coffee';

class Search extends Component {
  constructor(props){
    super(props);

    this.fetchCoffee = this.fetchCoffee.bind(this);
}

fetchCoffee(e) {
  e.preventDefault();
  this.props.fetchCoffee(e.target.search.value);

}


  render(){

    return(
      <div className='center'>
      where you trying to find coffee
        <form onSubmit={ this.fetchCoffee }>
          <input type='text' name='search'/>
          <div>
            <input type='submit' className='btn btn-primary any-button' />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchCoffee })(Search);

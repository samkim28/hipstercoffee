import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchYelpStores } from '../actions/yelpSearch';

class Search extends Component {
  constructor(props){
    super(props);

    this.fetchYelpStores = this.fetchYelpStores.bind(this);
}

fetchYelpStores(e) {
  e.preventDefault();
  this.props.fetchYelpStores(e.target.search.value);

}


  render(){

    return(
      <div className='center'>
      where you trying to find coffee
        <form onSubmit={ this.fetchYelpStores }>
          <input type='text' name='search'/>
          <div>
            <input type='submit' className='btn btn-primary any-button' />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchYelpStores })(Search);

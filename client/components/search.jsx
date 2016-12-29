import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Search extends Component {
  constructor(props){
    super(props);
  }


  render(){

    return(
      <div className='center'>
      where you trying to find coffee
        <form>
          <input type='text' name='search'/>
          <div>
            <input type='submit' className='btn btn-primary any-button' />
          </div>
        </form>
      </div>
    )
  }
}

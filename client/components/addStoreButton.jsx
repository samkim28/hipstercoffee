import React, { Component } from 'react';
import { addStore } from '../actions/coffee';


export default class AddStoreButton extends Component {

  constructor(props) {
    super(props);

    this.addStore = this.addStore.bind(this);
  }

  addStore(input) {
    this.props.addStore(input);
  }

  render() {
    console.log('this.props inside addb utton: ', this.props);

    return (
      <button onClick={ () => addStore(this.props.store) }>
        like this store. add it to our database.
      </button>
    )
  }
}

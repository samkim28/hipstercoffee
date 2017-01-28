import React, { Component } from 'react';
import { addStore } from '../actions/hipsterStores';


export default class AddStoreButton extends Component {

  constructor(props) {
    super(props);

    this.addStore = this.addStore.bind(this);
  }

  addStore(input) {
    this.props.addStore(input);
  }

  render() {
    return (
      <button onClick={ () => addStore(this.props.store) }>
        like this store
      </button>
    )
  }
}

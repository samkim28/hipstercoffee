import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

export default class ReviewBox extends Component {

  render() {

    return (
      <div>
      <textarea form ="review" name="reviewbox" id="reviewid" cols="35" wrap="soft"></textarea>
        <form id="review">
          <input type="submit" />
        </form>
      </div>
    );
  }
}

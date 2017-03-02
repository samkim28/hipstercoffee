import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { addReview, fetchReviews } from '../actions/storeReviews';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {blueGrey700} from 'material-ui/styles/colors';


class ReviewBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: Cookies.get('username'),
      review: '',
      user_id: Cookies.get('user_id'),
      store_id: Cookies.get('store_id')
    }
    this.addReview = this.addReview.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

  }

  addReview(e) {
    e.preventDefault();
    if(!this.state) {

    }
    this.props.addReview(this.state)
    .then(()=> {
      this.props.fetchReviews(this.state.store_id);
    })
    .then(()=> {
      this.setState({review: ''});
    })
  }

  handleTextAreaChange(e) {
    this.setState({review: e.target.value})
  }

  render() {

    const styles = {
      underlineStyle: {
        borderColor: blueGrey700
      },
      floatingLabelStyle: {
        color: blueGrey700
      },
      floatingLabelFocusStyle: {
        color: blueGrey700
      },
      labelStyle: {
        color: 'white',
        textTransform: 'capitalize'
      },
      backgroundColor: blueGrey700
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>

      <div>
      {/* <textarea form ="review" name="reviewbox" id="reviewid" cols="35" wrap="soft" onChange={ this.handleTextAreaChange }></textarea> */}
        <form id="review" onSubmit={this.addReview}>
        <TextField
          hintText="Review"
          floatingLabelText="Review"
          multiLine={true}
          rows={2}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          style={{width: '100%'}}
          inputStyle={{width: '100%'}}
          onChange={ this.handleTextAreaChange }
          value={ this.state.review }
          />
          <FlatButton
            type="submit"
            className="btn btn-lg btn-primary btn-block main-btn"
            label="Submit Review"
            disabled={!this.state.review}
          />
        </form>
      </div>
      </MuiThemeProvider>

    );
  }
}

export default connect(null, { addReview, fetchReviews })(ReviewBox);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { submitSignUp, resetError } from '../../actions/auth';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {blueGrey700} from 'material-ui/styles/colors';
import { signIn, resetError } from '../actions/account';


class SignIn extends Component {

  componentWillUnmount() {
    this.props.resetError();
  }

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.signIn = this.signIn.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);


}

signIn(e) {
  e.preventDefault();
  this.props.signIn(this.state);
}

handleUsernameChange(e) {
  this.setState({username: e.target.value})
}

handlePasswordChange(e) {
  this.setState({password: e.target.value})
}

  render() {

    // const { handleSubmit, submitting } = this.props;
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
        <div className="container">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
            <div>
              <form className="form-signin-signup" onSubmit={ this.signIn }>
              <div>
                <TextField
                  name="username"
                  type="text"
                  onChange={this.handleUsernameChange}
                  floatingLabelText="Username"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
              </div>
              <div>
                <TextField
                  name="password"
                  type="password"
                  onChange={this.handlePasswordChange}
                  floatingLabelText="Password"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
              </div>
                {/* Confirm Password:
                <input
                  name="confirmPW"
                  type="password"
                /> */}
                <FlatButton
                  type="submit"
                  className="btn btn-lg btn-primary btn-block main-btn"
                  label="Sign In"
                />
                {/* <Link to={'/signin'} className="text-center new-account">
                  Sign In
                </Link> */}
                <div>
                  <Link to='/signup'>Create an account!</Link>
                </div>
              </form>
            </div>
          </div>
          {this.props.error}
        </div>
      </MuiThemeProvider>
    );

  }

}

const mapStateToProps = (state) => {
  if(!state.account){
    return {
      error: null
    }
  } else {
    return {
      error: state.account.error
    }
  }
}

export default connect(mapStateToProps, { signIn, resetError })(SignIn);

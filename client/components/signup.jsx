import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {blueGrey700} from 'material-ui/styles/colors';
import { signUp } from '../actions/account';


class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.signUp = this.signUp.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);


}

signUp(e) {
  e.preventDefault();
  this.props.signUp(this.state);
}

handleUsernameChange(e) {
  this.setState({username: e.target.value})
}

handlePasswordChange(e) {
  this.setState({password: e.target.value})
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
        <div className="container">
        <div className="row">
          <div className="col-6 col-md-4"></div>
          <div className="col-6 col-md-4">
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
                  style={{width: '100%'}}
                  inputStyle={{width: '100%'}}
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
                  style={{width: '100%'}}
                  inputStyle={{width: '100%'}}
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
                  label="Sign Up"
                />
                {/* <Link to={'/signin'} className="text-center new-account">
                  Sign In
                </Link> */}
              </form>
            </div>
            <div className="col-6 col-md-4"></div>
          </div>
        </div>
      </MuiThemeProvider>
    );

  }

}

export default connect(null, { signUp })(SignUp);

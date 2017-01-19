import React, {Component} from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {

  render() {

    return(
      <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand" href="#">Hipster Coffee</a>

      <div id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={'/hipsterlist'}>Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Yelp Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hipster Search</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

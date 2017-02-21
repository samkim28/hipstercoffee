import React, {Component} from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {

  render() {

    return(
      <nav className="navbar navbar-toggleable-md navbar-light">
        <Link to={'/'} className="navbar-brand mb-0">Hipster Coffee</Link>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Yelp Search</a>
            </li>
            <li className="nav-item">
              <Link to={'/hipsterlist'} className="nav-link">Hipster Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthState from "./AuthState";


export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/signin">
                <AuthState/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navStyling" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link active" to="/find">
                Find Restaurants <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="#">
                My Food Court
            </Link>


            </div>
          </div>
        </nav>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            User Name
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
              <a className="nav-item nav-link active" href="{.Find.js}">
                Find Restaurants <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                My Food Court
              </a>
            </div>
            <div className="navbar-nav">
            <a className="nav-item nav-link login/logout" href="#">
                LogIn/ LogOut
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

import React from "react";
import "../scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "../assets/logo.png";

const Header = () => {

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top fw-semibold`}
      >
        <div className="container-fluid">
          <img
            src={Logo}
            alt="logo"
            width="50"
            height="50"
            className={`bg-light rounded-circle d-inline-block align-text-top img-fluid`}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navDropdown"
            aria-controls="navDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#about">About</a>
              </li>
              <li className="nav-item">
                <a href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a href="#project">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

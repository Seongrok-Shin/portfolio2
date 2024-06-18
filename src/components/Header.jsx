import React from "react";
import '../scss/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from "../pages/About";
import Logo from "../assets/logo.png";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top fw-semibold">
            <div className="container-fluid">
                <img src={Logo} alt="logo" width="50" height="50" className="bg-light rounded-circle d-inline-block align-text-top img-fluid" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={`${About}`}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/"}>Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Education</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="/">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="/">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
import React, { useState } from "react";
import '../scss/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from "../assets/logo.png";
import Icon from "../icon/Icon";

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    const toggleHeaderVisibility = () => {
        setIsHeaderVisible(!isHeaderVisible);
    };

    return (
        <header>
            <div className="fixed-top" onClick={toggleHeaderVisibility}>
                <Icon name="nav" color={"black"} hoverColor={"orange"} fontSize={"2.5em"} />
            </div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top fw-semibold ${isHeaderVisible ? '' : 'd-none'}`}>
                <div className="container-fluid">
                    <img src={Logo} alt="logo" width="50" height="50" className={`bg-light rounded-circle d-inline-block align-text-top img-fluid ${isHeaderVisible ? '' : 'd-none'}`} onClick={toggleHeaderVisibility} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDropdown" aria-controls="navDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <a href="#education">Education</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

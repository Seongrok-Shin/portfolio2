import React from "react";
import '../scss/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const styleIcon = { color: "grey", fontSize: "1.5em" };

const Footer = () => (
    <footer className="footer">
        <div className="container-fluid mt-auto border-top py-1">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                        <FaMailBulk style={styleIcon} />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="p-4" href={process.env.REACT_APP_GIT_HUB}>
                        <FaGithub style={styleIcon} />
                    </a>
                </li>
                <li className="nav-item">
                    <a href={process.env.REACT_APP_LINKEDIN}>
                        <FaLinkedin style={styleIcon} />
                    </a>
                </li>
            </ul>
            <p className="text-muted text-end" style={{ fontFamily: "'lato', sans-serif" }}>Copyright © 2024. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
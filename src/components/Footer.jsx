import React from "react";
import '../scss/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Icon from "../icon/Icon";

const Footer = () => (
    <footer className="footer">
        <div className="container-fluid mt-auto border-top">
            <ul className="nav justify-content-end py-1">
                <li className="nav-item">
                    <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                        <Icon color="#222" fontSize="1em" name="mail" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="p-4" href={process.env.REACT_APP_GIT_HUB}>
                        <Icon color="#222" fontSize="1em" name="github" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href={process.env.REACT_APP_LINKEDIN}>
                        <Icon color="#222" fontSize="1em" name="linkedin" />
                    </a>
                </li>
            </ul>
            <p className="text-end" style={{ fontFamily: "'lato', sans-serif", color: "#222" }}>Copyright © 2024 – Seongrok Shin</p>
        </div>
    </footer>
);

export default Footer;
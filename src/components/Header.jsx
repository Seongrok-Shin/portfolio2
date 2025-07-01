import React, {useState, useEffect} from "react";
import "../scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "../assets/logo.png";

const Header = () => {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "skills", "experience", "project"];
            const scrollPosition = window.scrollY + 150; // increased offset for better detection

            let currentSection = "about"; // default to first section

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    // Check if we're within this section's boundaries
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSection = sections[i];
                        break;
                    }

                    // If we're past the last section, highlight it
                    if (i === sections.length - 1 && scrollPosition >= sectionTop) {
                        currentSection = sections[i];
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Set initial active section

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                                <a
                                    href="#about"
                                    className={`nav-link ${
                                        activeSection === "about"
                                            ? "active text-white fw-bold border-bottom border-2 border-light"
                                            : "text-light"
                                    }`}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#skills"
                                    className={`nav-link ${
                                        activeSection === "skills"
                                            ? "active text-white fw-bold border-bottom border-2 border-light"
                                            : "text-light"
                                    }`}
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#experience"
                                    className={`nav-link ${
                                        activeSection === "experience"
                                            ? "active text-white fw-bold border-bottom border-2 border-light"
                                            : "text-light"
                                    }`}
                                >
                                    Experience
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#project"
                                    className={`nav-link ${
                                        activeSection === "project"
                                            ? "active text-white fw-bold border-bottom border-2 border-light"
                                            : "text-light"
                                    }`}
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

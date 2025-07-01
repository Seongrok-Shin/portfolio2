import React from "react";
import {motion} from "framer-motion";
import '../scss/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Icon from "../icon/Icon";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {name: "mail", href: `mailto:${process.env.REACT_APP_EMAIL}`, label: "Email"},
        {name: "github", href: process.env.REACT_APP_GIT_HUB, label: "GitHub"},
        {name: "linkedin", href: process.env.REACT_APP_LINKEDIN, label: "LinkedIn"}
    ];

    return (
        <footer
            className="position-relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0f0f0f 100%)",
                borderTop: "1px solid rgba(255,255,255,0.1)"
            }}
        >
            {/* Background decorative elements */}
            <div className="position-absolute w-100 h-100" style={{zIndex: 1}}>
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: "150px",
                        height: "150px",
                        background: "linear-gradient(45deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))",
                        top: "-50px",
                        left: "10%",
                        filter: "blur(1px)"
                    }}
                />
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: "100px",
                        height: "100px",
                        background: "linear-gradient(45deg, rgba(255,255,255,0.015), rgba(255,255,255,0.003))",
                        bottom: "-30px",
                        right: "15%",
                        filter: "blur(1px)"
                    }}
                />
            </div>

            <div className="container-fluid py-3" style={{zIndex: 2, position: "relative"}}>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">

                        {/* Main Content */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            viewport={{once: true}}
                            className="mb-3"
                        >
                            <h3
                                className="fw-bold mb-2"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
                                    background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    letterSpacing: "-0.02em"
                                }}
                            >
                                Let's Connect
                            </h3>
                            <p
                                className="mb-3"
                                style={{
                                    color: "rgba(255,255,255,0.7)",
                                    fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                                    fontFamily: "'Inter', sans-serif",
                                    maxWidth: "350px",
                                    margin: "0 auto",
                                    lineHeight: "1.4"
                                }}
                            >
                                Feel free to reach out for collaborations or opportunities.
                            </p>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="d-flex justify-content-center align-items-center gap-2 mb-3"
                            initial={{opacity: 0, y: 15}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: 0.1, duration: 0.6}}
                            viewport={{once: true}}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={social.name}
                                    initial={{scale: 0, rotate: -30}}
                                    whileInView={{scale: 1, rotate: 0}}
                                    transition={{
                                        delay: 0.2 + index * 0.05,
                                        type: "spring",
                                        stiffness: 300
                                    }}
                                    viewport={{once: true}}
                                    whileHover={{scale: 1.05, y: -2}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "clamp(38px, 8vw, 45px)",
                                            height: "clamp(38px, 8vw, 45px)",
                                            borderRadius: "10px",
                                            background: "rgba(255,255,255,0.05)",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            transition: "all 0.3s ease",
                                            textDecoration: "none"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <Icon color="#ffffff" fontSize="clamp(0.9em, 2.5vw, 1.1em)" name={social.name}/>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Copyright */}
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{delay: 0.3, duration: 0.6}}
                            viewport={{once: true}}
                            className="pt-3"
                            style={{
                                borderTop: "1px solid rgba(255,255,255,0.1)"
                            }}
                        >
                            <p
                                className="mb-0"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "rgba(255,255,255,0.6)",
                                    fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                                    letterSpacing: "0.3px",
                                    lineHeight: "1.3"
                                }}
                            >
                                © {currentYear} Seongrok Shin. Crafted with ❤️ and lots of ☕
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
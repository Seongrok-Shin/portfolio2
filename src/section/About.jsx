import React from "react";
import FadeText from "../components/FadeInText";
import {motion} from "framer-motion";
import '../scss/custom.scss';
import 'dotenv/config';
import TypeAnimation from "../components/Typing";
import Icon from "../icon/Icon";
import profile from "../assets/image0.gif";
import {useResponsive, useResponsiveFontSize} from "../hooks/useResponsive";

export default function About() {
    const {isMobile} = useResponsive();

    const profileImageSize = useResponsiveFontSize({
        xs: "120px",
        md: "150px",
    });

    const iconSize = useResponsiveFontSize({
        xs: "1em",
        md: "1.2em",
    });

    const buttonFontSize = useResponsiveFontSize({
        xs: "0.9rem",
        md: "1rem",
    });

    const buttonHeight = useResponsiveFontSize({
        xs: "45px",
        md: "50px",
    });

    const buttonWidth = useResponsiveFontSize({
        xs: "140px",
        md: "160px",
    });

    const socialIconSize = useResponsiveFontSize({
        xs: "40px",
        md: "50px",
    });

    const toggleResume = () => {
        window.open(process.env.REACT_APP_CV, "_blank");
    };

    return (
        <section
            className="container-fluid d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden"
            id="about"
            style={{
                height: "100vh",
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0f0f0f 100%)"
            }}>

            {/* Background decorative elements */}
            <div className="position-absolute w-100 h-100" style={{zIndex: 1}}>
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: isMobile ? "200px" : "300px",
                        height: isMobile ? "200px" : "300px",
                        background: "linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                        top: "10%",
                        right: "10%",
                        filter: "blur(1px)"
                    }}
                />
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: isMobile ? "120px" : "200px",
                        height: isMobile ? "120px" : "200px",
                        background: "linear-gradient(45deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))",
                        bottom: "20%",
                        left: "5%",
                        filter: "blur(1px)"
                    }}
                />
            </div>

            <div className="container" style={{zIndex: 2}}>
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-lg-10 col-xl-8 text-center">

                        {/* Profile Image with modern styling */}
                        <motion.div
                            className="mb-4"
                            initial={{scale: 0, rotate: -180}}
                            animate={{scale: 1, rotate: 0}}
                            transition={{duration: 1, ease: "easeOut"}}
                        >
                            <div
                                className="d-inline-block position-relative"
                                style={{
                                    padding: "4px",
                                    background: "linear-gradient(45deg, #ffffff20, #ffffff10)",
                                    borderRadius: "50%",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                                }}
                            >
                                <img
                                    src={profile}
                                    alt="Avatar"
                                    className="rounded-circle"
                                    style={{
                                        width: profileImageSize,
                                        height: profileImageSize,
                                        objectFit: "cover",
                                        border: "3px solid rgba(255,255,255,0.1)"
                                    }}
                                />
                                <div
                                    className="position-absolute rounded-circle"
                                    style={{
                                        width: isMobile ? "16px" : "20px",
                                        height: isMobile ? "16px" : "20px",
                                        background: "#00ff88",
                                        bottom: isMobile ? "12px" : "15px",
                                        right: isMobile ? "12px" : "15px",
                                        border: "3px solid #1a1a1a",
                                        boxShadow: "0 0 15px rgba(0,255,136,0.5)"
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Name with enhanced styling */}
                        <motion.div
                            className="mb-3"
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3, duration: 0.8}}
                        >
                            <FadeText isActive={true} directionY={-30} setTime={1}>
                                <h1
                                    className="fw-bold mb-0"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: isMobile ? "clamp(2rem, 8vw, 2.5rem)" : "clamp(2.5rem, 5vw, 4rem)",
                                        background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        letterSpacing: "-0.02em",
                                        lineHeight: "1.1"
                                    }}
                                >
                                    {process.env.REACT_APP_NAME}
                                </h1>
                            </FadeText>
                        </motion.div>

                        {/* Type Animation with modern container */}
                        <motion.div
                            className="mb-5"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6, duration: 1}}
                        >
                            <div
                                className="d-inline-block px-4 py-2 rounded-pill"
                                style={{
                                    background: "rgba(255,255,255,0.05)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.1)"
                                }}
                            >
                                <TypeAnimation/>
                            </div>
                        </motion.div>

                        {/* Social icons with modern design */}
                        <motion.div
                            className={`d-flex justify-content-center align-items-center ${isMobile ? 'gap-2' : 'gap-3'} mb-5`}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.9, duration: 0.8}}
                        >
                            {[
                                {name: "mail", href: `mailto:${process.env.REACT_APP_EMAIL}`, delay: 1},
                                {name: "github", href: process.env.REACT_APP_GIT_HUB, delay: 1.2},
                                {name: "linkedin", href: process.env.REACT_APP_LINKEDIN, delay: 1.4}
                            ].map((social) => (
                                <motion.div
                                    key={social.name}
                                    initial={{scale: 0, rotate: -90}}
                                    animate={{scale: 1, rotate: 0}}
                                    transition={{delay: social.delay, type: "spring", stiffness: 200}}
                                    whileHover={{scale: 1.1, y: -5}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: socialIconSize,
                                            height: socialIconSize,
                                            borderRadius: "12px",
                                            background: "rgba(255,255,255,0.05)",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            transition: "all 0.3s ease",
                                            textDecoration: "none"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = "rgba(255,255,255,0.1)";
                                            e.target.style.borderColor = "rgba(255,255,255,0.2)";
                                            e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = "rgba(255,255,255,0.05)";
                                            e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    >
                                        <Icon color="#ffffff" fontSize={iconSize} name={social.name}/>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Modern Resume button */}
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 1.6, duration: 0.8}}
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                                }}
                                whileTap={{scale: 0.98}}
                                className="btn position-relative overflow-hidden"
                                onClick={toggleResume}
                                style={{
                                    background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
                                    color: "#1a1a1a",
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: "600",
                                    fontSize: buttonFontSize,
                                    height: buttonHeight,
                                    width: buttonWidth,
                                    border: "none",
                                    borderRadius: "25px",
                                    transition: "all 0.3s ease",
                                    letterSpacing: "0.5px"
                                }}
                            >
                                <span className="position-relative" style={{zIndex: 2}}>
                                    View Resume
                                </span>
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{
                                        background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                                        transform: "translateX(-100%)",
                                        transition: "transform 0.6s ease"
                                    }}
                                />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

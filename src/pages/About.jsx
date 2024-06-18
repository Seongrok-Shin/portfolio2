import React from "react";
import { FaGithub, FaMailBulk } from "react-icons/fa";
import Fade from "../components/Fade";
import { motion } from "framer-motion";
import '../scss/custom.scss';
import 'dotenv/config';
import { FaLinkedin } from "react-icons/fa6";
import TypeAnimation from "../components/TypeAnimation";

const styleIcon = { color: "black", fontSize: "2em" };

const About = () => {
    return (
        <div className="container-fluid px-5 py-5 my-5 bg-white">
            <div className="text-center">
                <img src={process.env.REACT_APP_AVATAR} alt="background" className="img-fluid rounded-circle" style={{ width: "300px", height: "300px" }} />
                <Fade isActive={true} movement={-30}>
                    <span className="p-5" />
                    <h1 className="fw-bold">{process.env.REACT_APP_NAME}</h1>
                </Fade>
                <TypeAnimation />
                <span className="p-5" />
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 1, type: "spring", stiffness: 400, damping: 20 }}>
                        <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                            <FaMailBulk style={styleIcon} />
                        </a>
                    </motion.p>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 1.5, type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <a className="p-4" href={process.env.REACT_APP_GIT_HUB}>
                            <FaGithub style={styleIcon} />
                        </a>
                    </motion.p>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 2, type: "spring", stiffness: 400, damping: 20 }}>
                        <a href={process.env.REACT_APP_LINKEDIN}>
                            <FaLinkedin style={styleIcon} />
                        </a>
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default About;


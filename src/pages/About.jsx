import React, { useState } from "react";
import FadeText from "../components/FadeInText";
import { motion } from "framer-motion";
import '../scss/custom.scss';
import 'dotenv/config';
import TypeAnimation from "../components/Typing";
import Icon from "../icon/Icon";
import Skills from "./Skills";

export default function About() {
    const [isSkillsVisible, setIsSkillsVisible] = useState(false);

    const toggleSkillsVisibility = () => {
        setIsSkillsVisible(!isSkillsVisible);
    };

    const toggleResume = () => {
        window.open(process.env.REACT_APP_CV, "_blank");
    };

    return (
        <div className="container-fluid bg-white d-flex flex-column justify-content-center align-items-center" id="about" style={{ height: "100vh" }}>
            <div>
                <img src={process.env.REACT_APP_AVATAR} alt="Avatar" className="img-fluid rounded-circle" style={{ width: "300px", height: "300px" }} />
            </div>
            <div>
                <FadeText isActive={true} movement={-30}>
                    <span className="p-5" />
                    <h1 className="fw-bold" style={{ fontFamily: "'lato', sans-serif" }}>{process.env.REACT_APP_NAME}</h1>
                </FadeText>
            </div>
            <div>
                <TypeAnimation />
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 1, type: "spring" }}>
                    <a href={`mailto:${process.env.REACT_APP_EMAIL}`} target="_blank" rel="noreferrer">
                        <Icon color="#222" fontSize="1.5em" name="mail" />
                    </a>
                </motion.p>
                <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 1.5, type: "spring" }}
                >
                    <a className="p-4" href={process.env.REACT_APP_GIT_HUB} target="_blank" rel="noreferrer">
                        <Icon color="#222" fontSize="1.5em" name="github" />
                    </a>
                </motion.p>
                <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 2, type: "spring" }}>
                    <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                        <Icon color="#222" fontSize="1.5em" name="linkedin" />
                    </a>
                </motion.p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn" href="#skills" onClick={toggleSkillsVisibility} style={{ background: "#222", color: "white", fontFamily: "lato", height: "50px", width: "100px" }}>
                    Skills
                </button>
                <span className="p-3"></span>
                <button className="btn" onClick={toggleResume} style={{ background: "#222", color: "white", fontFamily: "lato", height: "50px", width: "100px" }}>
                    Resume
                </button>
            </div>
            {isSkillsVisible && <Skills />}
        </div>
    );
};
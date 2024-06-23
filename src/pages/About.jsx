import React, { useState } from "react";
import FadeText from "../components/FadeInText";
import { motion } from "framer-motion";
import '../scss/custom.scss';
import 'dotenv/config';
import TypeAnimation from "../components/Typing";
import Icon from "../icon/Icon";
import Skills from "./Skills";
import FadeIcon from "../components/FadeIAOIcon";

export default function About() {
    const [isSkillsVisible, setIsSkillsVisible] = useState(false);

    const toggleSkillsVisibility = () => {
        setIsSkillsVisible(!isSkillsVisible);
    };

    return (
        <div className="container-fluid py-5 my-5 bg-white d-flex align-items-center justify-content-center" id="about" style={{ height: "100vh" }}>
            <div className="text-center">
                <img src={process.env.REACT_APP_AVATAR} alt="Avatar" className="img-fluid rounded-circle" style={{ width: "300px", height: "300px" }} />
                <FadeText isActive={true} movement={-30}>
                    <span className="p-5" />
                    <h1 className="fw-bold">{process.env.REACT_APP_NAME}</h1>
                </FadeText>
                <TypeAnimation />
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 1, type: "spring", stiffness: 400, damping: 20 }}>
                        <a href={`mailto:${process.env.REACT_APP_EMAIL}`} target="_blank" rel="noreferrer">
                            <Icon color="#222" fontSize="1.5em" name="mail" />
                        </a>
                    </motion.p>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 1.5, type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <a className="p-4" href={process.env.REACT_APP_GIT_HUB} target="_blank" rel="noreferrer">
                            <Icon color="#222" fontSize="1.5em" name="github" />
                        </a>
                    </motion.p>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 2, type: "spring", stiffness: 400, damping: 20 }}>
                        <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                            <Icon color="#222" fontSize="1.5em" name="linkedin" />
                        </a>
                    </motion.p>
                </div>
                <button className="btn m-3" onClick={toggleSkillsVisibility} style={{ background: "#222", color: "white", fontFamily: "lato" }}>Skills</button>
                <a className="btn" href={process.env.REACT_APP_CV} target="_blank" rel="noreferrer" style={{ background: "#222", color: "white", fontFamily: "lato" }}>Resume</a>
                {isSkillsVisible && <FadeIcon isActive={true}><Skills /></FadeIcon>}
            </div>
        </div >
    );
};


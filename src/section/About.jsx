import React from "react";
import FadeText from "../components/FadeInText";
import {motion} from "framer-motion";
import '../scss/custom.scss';
import 'dotenv/config';
import TypeAnimation from "../components/Typing";
import Icon from "../icon/Icon";
import profile from "../assets/image0.gif";

export default function About() {
    const toggleResume = () => {
        window.open(process.env.REACT_APP_CV, "_blank");
    };

    return (
        <section className="container-fluid bg-white d-flex flex-column justify-content-center align-items" id="about"
                 style={{height: "100vh"}}>
            <div>
                <div>
                    <img src={profile} alt="Avatar" className="avatar"/>
                </div>
                <div>
                    <FadeText isActive={true} directionY={-30} setTime={1}>
                        <span className="p-5"/>
                        <h1 className="fw-bold about-text"
                            style={{fontFamily: "'Inter', sans-serif"}}>{process.env.REACT_APP_NAME}</h1>
                    </FadeText>
                </div>

                <TypeAnimation/>

                <div className="d-flex flex-row justify-content-center align-items-center">
                    <motion.p
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        exit={{scale: 0}}
                        transition={{delay: 1, type: "spring"}}>
                        <a href={`mailto:${process.env.REACT_APP_EMAIL}`} target="_blank" rel="noreferrer">
                            <Icon color="#222" fontSize="1.5em" name="mail"/>
                        </a>
                    </motion.p>
                    <motion.p
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        exit={{scale: 0}}
                        transition={{delay: 1.5, type: "spring"}}
                    >
                        <a className="p-4" href={process.env.REACT_APP_GIT_HUB} target="_blank" rel="noreferrer">
                            <Icon color="#222" fontSize="1.5em" name="github"/>
                        </a>
                    </motion.p>
                    <motion.p
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        exit={{scale: 0}}
                        transition={{delay: 2, type: "spring"}}>
                        <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                            <Icon color="#222" fontSize="1.5em" name="linkedin"/>
                        </a>
                    </motion.p>
                </div>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="btn" onClick={toggleResume}
                    style={{
                        background: "#222",
                        color: "white",
                        fontFamily: "'Inter', sans-serif",
                        height: "50px",
                        width: "120px"
                    }}>
                    Resume
                </motion.button>
            </div>

        </section>
    );
};
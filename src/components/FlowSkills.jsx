import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../icon/Icon";
import "./../scss/custom.scss";

const FlowSkills = () => {
    const [iconNames, setIconNames] = useState([
        "html", "javascript", "react", "expo", "reactnative", "next",
        "bootstrap", "tailwindcss", "node", "java", "php", "mongo",
        "firebase", "mysql", "r", "python", "rstudio", "git", "github"
    ]);

    const isMobile = useCallback(() => {
        return window.innerWidth < 768;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIconNames(prevIconNames => {
                const newIconNames = [...prevIconNames];
                newIconNames.unshift(newIconNames.pop());
                return newIconNames;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="skills" className="skills-container">
            <AnimatePresence initial={false}>
                {iconNames.map((name, index) => (
                    <motion.div
                        key={name}
                        className="icon-container"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, x: 200, transition: { duration: 0.5 } }}
                        transition={{ delay: index * 0.5, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    >
                        <Icon
                            name={name}
                            color={{
                                html: "orange", javascript: "yellow", react: "skyblue", expo: "black",
                                reactnative: "skyblue", next: "black", bootstrap: "purple", tailwindcss: "skyblue",
                                node: "green", java: "orange", php: "purple", mongo: "green", firebase: "orange",
                                mysql: "blue", r: "skyblue", python: "blue", rstudio: "skyblue", git: "orange", github: "black"
                            }[name]}
                            fontSize={isMobile() ? "1em" : "2em"}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </section>
    );
};

export default FlowSkills;

import React from "react";
import {motion} from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../scss/custom.scss";
import Icon from "../icon/Icon";
import {useResponsive, useResponsiveFontSize, useResponsiveClassName} from "../hooks/useResponsive";

const Skills = () => {
    const {isMobile} = useResponsive();

    const fontSize = useResponsiveFontSize({
        xs: "1em",
        md: "2em",
    });

    const skillCardClassName = useResponsiveClassName({
        xs: "col-12 col-md-4 col-lg-3 p-3",
        md: "mt-3"
    });

    const skillCategories = [
        {
            title: "Web Development",
            progress: 80,
            skills: [
                {name: "react", color: "skyblue", label: "React"},
                {name: "next", color: "black", label: "Next"},
                {name: "bootstrap", color: "purple", label: "Bootstrap"},
                {name: "tailwindcss", color: "skyblue", label: "Tailwind CSS"},
            ],
        },
        {
            title: "Desktop / Mobile",
            progress: 60,
            skills: [
                {name: "java", color: "orange", label: "Java"},
                {name: "python", color: "blue", label: "Python"},
                {name: "dotnet", color: "purple", label: "Dotnet"},
                {name: "reactnative", color: "skyblue", label: "ReactNative"},
            ],
        },
        {
            title: "Data Science",
            progress: 50,
            skills: [
                {name: "r", color: "skyblue", label: "R"},
                {name: "python", color: "blue", label: "Python"},
            ],
        },
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section
            id="skills"
            className="container-fluid d-flex flex-column justify-content-center align-items-center position-relative"
            style={{
                minHeight: "100vh",
                backgroundColor: "#222",
                padding: "80px 0 60px 0",
                overflow: "hidden"
            }}
        >
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                >
                    <h2 className="text-white fw-bold mb-3" style={{fontSize: "2.5rem"}}>
                        Skills & Technologies
                    </h2>
                    <p className="text-white-50" style={{fontSize: "1.1rem"}}>
                        Technologies I work with
                    </p>
                </motion.div>

                <motion.div
                    className="row g-4 justify-content-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    style={{maxWidth: "1200px", margin: "0 auto"}}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="col-12 col-md-6 col-lg-4"
                            variants={cardVariants}
                        >
                            <motion.div
                                className="skill-card h-100"
                                whileHover={{scale: 1.05, y: -10}}
                                transition={{type: "spring", stiffness: 300, damping: 20}}
                                style={{
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "20px",
                                    padding: "2rem",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    minHeight: "280px"
                                }}
                            >
                                <div className="text-center">
                                    <h6 className="fw-bold text-white mb-3" style={{fontSize: "1.3rem"}}>
                                        {category.title}
                                    </h6>

                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="text-white-50 small">Proficiency</span>
                                            <span className="text-white fw-bold">{category.progress}%</span>
                                        </div>
                                        <div
                                            className="progress"
                                            style={{
                                                height: "8px",
                                                backgroundColor: "rgba(255,255,255,0.2)",
                                                borderRadius: "4px"
                                            }}
                                        >
                                            <motion.div
                                                className="progress-bar"
                                                initial={{width: 0}}
                                                whileInView={{width: `${category.progress}%`}}
                                                transition={{duration: 1.5, delay: 0.3}}
                                                style={{
                                                    background: "linear-gradient(90deg, #6c757d 0%, #343a40 50%, #212529 100%)",
                                                    borderRadius: "4px"
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Skills Icons */}
                                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                                        {category.skills.map((skill) => (
                                            <motion.div
                                                key={skill.name}
                                                className="skill-item text-center"
                                                whileHover={{y: -5, scale: 1.1}}
                                                transition={{type: "spring", stiffness: 400}}
                                            >
                                                <Icon
                                                    name={skill.name}
                                                    color={skill.color}
                                                    fontSize={fontSize}
                                                />
                                                <p
                                                    className="mt-2 mb-0 text-white-50 small"
                                                    style={{fontSize: "0.8rem"}}
                                                >
                                                    {skill.label}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

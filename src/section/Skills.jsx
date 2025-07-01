import React, {useMemo} from "react";
import {motion} from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../scss/custom.scss";
import Icon from "../icon/Icon";
import {useResponsive, useResponsiveFontSize, useResponsiveClassName} from "../hooks/useResponsive";

const Skills = React.memo(() => {
    const {isMobile} = useResponsive();

    // Memoize font sizes to prevent recalculation
    const fontSizes = useMemo(() => ({
        icon: {
            xs: "1.2em",
            md: "2em",
        },
        title: {
            xs: "1.8rem",
            md: "2.5rem",
        },
        subtitle: {
            xs: "0.9rem",
            md: "1.1rem",
        },
        cardTitle: {
            xs: "1rem",
            md: "1.3rem",
        },
        skillLabel: {
            xs: "0.7rem",
            md: "0.8rem",
        }
    }), []);

    const iconFontSize = useResponsiveFontSize(fontSizes.icon);
    const titleFontSize = useResponsiveFontSize(fontSizes.title);
    const subtitleFontSize = useResponsiveFontSize(fontSizes.subtitle);
    const cardTitleFontSize = useResponsiveFontSize(fontSizes.cardTitle);
    const skillLabelFontSize = useResponsiveFontSize(fontSizes.skillLabel);

    // Memoize skill categories to prevent unnecessary re-renders
    const skillCategories = useMemo(() => [
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
            progress: 80,
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
    ], []);

    // Memoize animation variants to prevent recalculation
    const animationVariants = useMemo(() => ({
        container: {
            hidden: {opacity: 0},
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
        },
        card: {
            hidden: {y: 20, opacity: 0},
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                },
            },
        }
    }), []);

    return (
        <section
            id="skills"
            className="container-fluid d-flex flex-column justify-content-center align-items-center position-relative"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
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
                    <h2 className="text-white fw-bold mb-3" style={{fontSize: titleFontSize}}>
                        Skills & Technologies
                    </h2>
                    <p className="text-white-50" style={{fontSize: subtitleFontSize}}>
                        Technologies I work with
                    </p>
                </motion.div>

                <motion.div
                    className="row g-4 justify-content-center"
                    variants={animationVariants.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    style={{maxWidth: "1200px", margin: "0 auto"}}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="col-12 col-md-6 col-lg-4"
                            variants={animationVariants.card}
                        >
                            <motion.div
                                className="skill-card h-100"
                                whileHover={{scale: 1.05, y: -10}}
                                transition={{type: "spring", stiffness: 300, damping: 20}}
                                style={{
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "20px",
                                    padding: isMobile ? "1.5rem" : "2rem",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    minHeight: isMobile ? "240px" : "280px"
                                }}
                            >
                                <div className="text-center">
                                    <h6 className="fw-bold text-white mb-3" style={{fontSize: cardTitleFontSize}}>
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
                                    <div
                                        className={`d-flex flex-wrap justify-content-center align-items-center ${isMobile ? 'gap-2' : 'gap-3'}`}>
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
                                                    fontSize={iconFontSize}
                                                />
                                                <p
                                                    className="mt-2 mb-0 text-white-50 small"
                                                    style={{fontSize: skillLabelFontSize}}
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
});

export default Skills;

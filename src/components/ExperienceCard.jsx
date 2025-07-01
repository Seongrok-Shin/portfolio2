import React from "react";
import {motion} from "framer-motion";
import SkillBadge from "./SkillBadge";
import {useResponsive} from "../hooks/useResponsive";

const ExperienceCard = ({experience, variants}) => {
    const {isMobile, isTablet} = useResponsive();

    // Responsive values for different screen sizes
    const iconSize = isMobile ? "50px" : "80px";
    const iconFontSize = isMobile ? "1rem" : "2rem";
    const titleFontSize = isMobile ? "1rem" : "1.5rem";
    const descriptionFontSize = isMobile ? "0.65rem" : "1rem";
    const badgeFontSize = isMobile ? "0.6rem" : "0.9rem";
    const categoryBadgeFontSize = isMobile ? "0.5rem" : "0.75rem";
    const keyAreasFontSize = isMobile ? "0.7rem" : "1rem";
    const cardHeight = isMobile ? "h-60" : "h-100";
    return (
        <motion.div
            variants={variants}
            className="col-lg-5 col-md-6"
        >
            <motion.div
                className="experience-card cardHeight p-4 rounded-4 position-relative overflow-hidden"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                    rest: {
                        y: 0,
                        scale: 1,
                        background: "rgba(255, 255, 255, 0.05)",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
                    },
                    hover: {
                        y: -10,
                        scale: 1.02,
                        background: "rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                        transition: {duration: 0.3}
                    }
                }}
            >
                {/* Category Badge */}
                <div className="position-absolute top-0 end-0 m-3">
                    <span
                        className="badge px-3 py-2 text-white fw-bold"
                        style={{
                            backgroundColor: experience.color,
                            fontSize: categoryBadgeFontSize,
                            borderRadius: "20px"
                        }}
                    >
                        {experience.category}
                    </span>
                </div>

                {/* Icon */}
                <div className="text-center mb-4">
                    <motion.div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                            width: iconSize,
                            height: iconSize,
                            backgroundColor: `${experience.color}30`,
                            border: `3px solid ${experience.color}`
                        }}
                        whileHover={{rotate: 360}}
                        transition={{duration: 0.6}}
                    >
                        <span style={{fontSize: iconFontSize}}>{experience.icon}</span>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                    <h3 className="fw-bold mb-3 text-white" style={{fontSize: titleFontSize}}>
                        {experience.title}
                    </h3>

                    <div className="mb-3">
                        <span
                            className="badge bg-dark text-light px-3 py-2"
                            style={{fontSize: badgeFontSize, borderRadius: "15px", border: "1px solid #4b5563"}}
                        >
                            📅 {experience.period}
                        </span>
                    </div>

                    <p className="text-white mb-4" style={{lineHeight: "1.6", fontSize: descriptionFontSize}}>
                        {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="skills-section">
                        <h6 className="fw-bold text-white mb-3" style={{fontSize: keyAreasFontSize}}>Key Areas:</h6>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {experience.skills.map((skill, i) => (
                                <SkillBadge
                                    key={i}
                                    skill={skill}
                                    color={experience.color}
                                    index={i}
                                    isMobile={isMobile}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Elements - Animated when card is hovered */}
                <motion.div
                    className="position-absolute"
                    style={{
                        top: "-20px",
                        right: "-20px",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: `linear-gradient(45deg, ${experience.color}, transparent)`
                    }}
                    variants={{
                        rest: {
                            rotate: 0,
                            scale: 1,
                            opacity: 0.4
                        },
                        hover: {
                            rotate: 360,
                            scale: 1.3,
                            opacity: 0.6,
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            }
                        }
                    }}
                />

                {/* Additional floating decorative element */}
                <motion.div
                    className="position-absolute"
                    style={{
                        top: "10px",
                        right: "10px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${experience.color}40, transparent)`
                    }}
                    variants={{
                        rest: {
                            y: 0,
                            x: 0,
                            scale: 1,
                            opacity: 0.4
                        },
                        hover: {
                            y: -15,
                            x: 10,
                            scale: 1.5,
                            opacity: 0.6,
                            transition: {
                                duration: 0.4,
                                ease: "easeOut"
                            }
                        }
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ExperienceCard;

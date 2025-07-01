import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ExperienceCard from "../components/ExperienceCard";
import BackgroundParticles from "../components/BackgroundParticles";
import "../scss/custom.scss";

const Experience = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsScrolled(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const experiences = [
        {
            id: 1,
            category: "Education",
            title: "Auckland University of Technology",
            period: "Mar 2021 - Dec 2023",
            description: "As a student, I studied Software Development and Data Science in BCIS course for 3 years.",
            icon: "🎓",
            skills: ["Software Development", "Data Science", "BCIS"],
            color: "#6b7280"
        },
        {
            id: 2,
            category: "Event Experience",
            title: "GovHack 2022",
            period: "Aug 2022 - Aug 2022",
            description: "Participated in government hackathon focusing on innovative solutions for public sector challenges.",
            icon: "🏆",
            skills: ["Hackathon", "Innovation", "Problem Solving"],
            color: "#4b5563"
        },
        {
            id: 3,
            category: "Event Experience",
            title: "GovHack 2023",
            period: "Aug 2023 - Aug 2023",
            description: "As a front-end developer, I have created a web application.",
            icon: "🌐",
            skills: ["Front-end Development", "Web Applications", "Collaboration"],
            color: "#374151"
        },
        {
            id: 4,
            category: "Professional Experience",
            title: "Be Herd Limited",
            period: "July 2024 - Present",
            description: "Founded startup company with a team. As a front-end engineer, I have created a progressive web application.",
            icon: "🚀",
            skills: ["Entrepreneurship", "Front-end Engineering", "Progressive Web Apps"],
            color: "#1f2937"
        },
        {
            id: 5,
            category: "Professional Experience",
            title: "Netflix App Review Analysis",
            period: "Dec, 2024 - Feb, 2025",
            description: "Built a full-stack web analytics platform for Netflix app review analysis using React, Python and AWS services.",
            icon: "📊",
            skills: ["Full-stack Development", "Data Analysis", "AWS"],
            color: "#111827"
        },
        {
            id: 6,
            category: "Professional Experience",
            title: "AGB Stone",
            period: "May, 2025 - Present",
            description: "Maintained and enhanced a production portal system for managing orders, inventory, and manufacturing progress.",
            icon: "💻",
            skills: ["Full-stack Development", ".NET", "Azure"],
            color: "#111827"
        }
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const cardVariants = {
        hidden: {y: 50, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };


    return (
        <section
            id="experience"
            className="container-fluid d-flex flex-column justify-content-center align-items-center py-5"
            style={{minHeight: "100vh", background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0f0f0f 100%)"}}
        >
            <div className="container">
                {/* Experience Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isScrolled ? "visible" : "hidden"}
                    className="row justify-content-center g-4"
                >
                    {experiences.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            variants={cardVariants}
                        />
                    ))}
                </motion.div>
            </div>

            <BackgroundParticles/>
        </section>
    );
};

export default Experience;

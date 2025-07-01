import React, {useState, useEffect, useMemo, useCallback} from "react";
import {motion} from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ExperienceCard from "../components/ExperienceCard";
import BackgroundParticles from "../components/BackgroundParticles";
import "../scss/custom.scss";
import {usePerformance} from "../hooks/usePerformance";

const Experience = React.memo(() => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {useThrottle, useMemoizedStyles} = usePerformance();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsScrolled(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Memoize experiences data to prevent unnecessary re-renders
    const experiences = useMemo(() => [
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
            period: "Aug 2022",
            description: "Participated in GovHack hackathon and built PipeWatch project using React and Python.",
            icon: "🏆",
            skills: ["React", "Python", "Team Collaboration"],
            color: "#8b5cf6"
        },
        {
            id: 3,
            category: "Event Experience",
            title: "GovHack 2023",
            period: "Aug 2023",
            description: "Won People's Choice Award with GreenKiwi project at GovHack hackathon.",
            icon: "🥇",
            skills: ["Next.js", "Express.js", "Firebase"],
            color: "#10b981"
        },
        {
            id: 4,
            category: "Work Experience",
            title: "Be Herd Limited",
            period: "July 2024 - Present",
            description: "Founded startup company with a team. As a front-end engineer, I have created a progressive web application.",
            icon: "🚀",
            skills: ["Entrepreneurship", "Front-end Engineering", "Progressive Web Apps"],
            color: "#1f2937"
        },
        {
            id: 5,
            category: "Work Experience",
            title: "Netflix App Review Analysis",
            period: "Dec, 2024 - Feb, 2025",
            description: "Built a full-stack web analytics platform for Netflix app review analysis using React, Python and AWS services.",
            icon: "📊",
            skills: ["Full-stack Development", "Data Analysis", "AWS"],
            color: "#111827"
        },
        {
            id: 6,
            category: "Work Experience",
            title: "AGB Stone",
            period: "May, 2025 - Present",
            description: "Maintained and enhanced a production portal system for managing orders, inventory, and manufacturing progress.",
            icon: "💻",
            skills: ["Full-stack Development", ".NET", "Azure"],
            color: "#111827"
        }
    ], []);

    // Memoize animation variants
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
        item: {
            hidden: {y: 50, opacity: 0},
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                },
            },
        }
    }), []);

    // Memoize section styles
    const sectionStyles = useMemoizedStyles({
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3a3a3a 0%, #5a5a5a 50%, #3a3a3a 100%)",
        position: "relative",
        overflow: "hidden"
    }, []);

    return (
        <section
            id="experience"
            className="py-5"
            style={sectionStyles}
        >
            <BackgroundParticles/>
            <div className="container">
                {/* Experience Cards */}
                <motion.div
                    variants={animationVariants.container}
                    initial="hidden"
                    animate={isScrolled ? "visible" : "hidden"}
                    className="row justify-content-center g-4"
                >
                    {experiences.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            variants={animationVariants.item}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
});

export default Experience;

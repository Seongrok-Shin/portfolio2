import React, {useMemo} from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectCarousel from "../components/ProjectCarousel";
import {projectsData} from "../data/projectsData";
import {useResponsive} from "../hooks/useResponsive";

const Project = React.memo(() => {
    const {isMobile} = useResponsive();

    // Memoize projects data to prevent unnecessary re-renders
    const memoizedProjects = useMemo(() => projectsData, []);

    return (
        <section id="project" className="project-section">
            <div className="container">
                <div className="projects-container">
                    <ProjectCarousel projects={memoizedProjects}/>
                </div>
            </div>
        </section>
    );
});

export default Project;

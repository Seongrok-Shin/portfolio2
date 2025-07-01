import React from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectCarousel from "../components/ProjectCarousel";
import {projectsData} from "../data/projectsData";
import {useResponsive} from "../hooks/useResponsive";

const Project = () => {
    const {isMobile} = useResponsive();

    return (
        <section id="project" className="project-section">
            <div className="container">
                <div className="projects-container">
                    <ProjectCarousel projects={projectsData}/>
                </div>
            </div>
        </section>
    );
};

export default Project;

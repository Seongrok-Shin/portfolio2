import React from 'react';
import Icon from '../icon/Icon';
import {useResponsiveFontSize} from '../hooks/useResponsive';

const ModernProjectCard = ({project, isActive}) => {
    const fontSize = useResponsiveFontSize({
        xs: "1.5em",
        md: "2.5em"
    });

    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`} data-bs-interval="10000">
            <div className="project-content">
                <div className="project-image-container">
                    <img
                        src={project.image}
                        className="project-image img-fluid"
                        alt={`${project.title} project`}
                        loading="lazy"
                    />
                    <div className="project-overlay">
                        <div className="project-tech-badges">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                        <span className="project-date">{project.date}</span>
                    </div>

                    <div className="project-description">
                        {project.description.map((desc, index) => (
                            <p key={index} className="description-item">
                                {desc}
                            </p>
                        ))}
                    </div>

                    <div className="project-links">
                        {project.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                title={link.type}
                            >
                                <Icon
                                    color={link.color}
                                    fontSize={fontSize}
                                    name={link.icon}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernProjectCard;

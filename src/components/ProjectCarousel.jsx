import React, {useState, useEffect} from 'react';
import ModernProjectCard from './ProjectCard';

const ProjectCarousel = ({projects}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // 자동 슬라이드 기능
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length, isAutoPlay]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
        // 5초 후 자동 재생 재개
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    return (
        <div className="modern-carousel">
            <div className="carousel-container">
                <div
                    className="carousel-slides"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    {projects.map((project, index) => (
                        <div key={project.id} className="carousel-slide">
                            <ModernProjectCard
                                project={project}
                                isActive={index === currentIndex}
                            />
                        </div>
                    ))}
                </div>

                {/* 네비게이션 버튼 */}
                <button
                    className="carousel-nav carousel-nav-prev"
                    onClick={goToPrevious}
                    aria-label="Previous project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>

                <button
                    className="carousel-nav carousel-nav-next"
                    onClick={goToNext}
                    aria-label="Next project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {/* 인디케이터 */}
            <div className="carousel-indicators">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>

            {/* 자동재생 컨트롤 */}
            <button
                className="autoplay-control"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                aria-label={isAutoPlay ? 'Pause autoplay' : 'Resume autoplay'}
            >
                {isAutoPlay ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                        <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ProjectCarousel;

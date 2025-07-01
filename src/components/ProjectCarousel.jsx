import React, {useState, useEffect, useCallback, useMemo} from 'react';
import ModernProjectCard from './ProjectCard';

const ProjectCarousel = React.memo(({projects}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Memoize projects length to prevent recalculation
    const projectsLength = useMemo(() => projects.length, [projects.length]);

    // 자동 슬라이드 기능
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projectsLength - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [projectsLength, isAutoPlay]);

    // Memoize navigation functions to prevent re-renders
    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
        // 5초 후 자동 재생 재개
        setTimeout(() => setIsAutoPlay(true), 10000);
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentIndex(currentIndex === 0 ? projectsLength - 1 : currentIndex - 1);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    }, [currentIndex, projectsLength]);

    const goToNext = useCallback(() => {
        setCurrentIndex(currentIndex === projectsLength - 1 ? 0 : currentIndex + 1);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    }, [currentIndex, projectsLength]);

    const toggleAutoPlay = useCallback(() => {
        setIsAutoPlay(!isAutoPlay);
    }, [isAutoPlay]);

    // Memoize carousel style to prevent recalculation
    const carouselStyle = useMemo(() => ({
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    }), [currentIndex]);

    return (
        <div className="modern-carousel">
            <div className="carousel-container">
                <div
                    className="carousel-slides"
                    style={carouselStyle}
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
                onClick={toggleAutoPlay}
                aria-label={isAutoPlay ? 'Pause autoplay' : 'Resume autoplay'}
            >
                {isAutoPlay ? '⏸️' : '▶️'}
            </button>
        </div>
    );
});

export default ProjectCarousel;

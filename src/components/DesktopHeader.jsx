// eslint-disable-next-line
import React, {useState, useEffect} from "react";
import "../scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import {useResponsive} from "../hooks/useResponsive";

const DesktopHeader = () => {
    const {isTablet} = useResponsive();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    // 스크롤 감지로 헤더 스타일 변경 및 활성 섹션 추적
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // 활성 섹션 감지
            const sections = ['about', 'skills', 'experience', 'project'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            let currentSection = 'about';

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;

                    if (scrollPosition >= elementTop) {
                        currentSection = section;
                        break;
                    }
                }
            }

            // 페이지 하단에 있을 때 마지막 섹션 활성화
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            if (scrollTop + windowHeight >= documentHeight - 50) {
                currentSection = 'project';
            }

            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {href: "#about", label: "About"},
        {href: "#skills", label: "Skills"},
        {href: "#experience", label: "Experience"},
        {href: "#project", label: "Projects"}
    ];

    const headerHeight = isTablet ? '65px' : '70px';

    return (
        <header
            className="position-fixed w-100 top-0 start-0"
            style={{
                zIndex: 9999,
                backgroundColor: isScrolled ? 'rgba(33, 37, 41, 0.95)' : 'rgba(33, 37, 41, 0.9)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
                height: headerHeight,
                minHeight: headerHeight,
                maxHeight: headerHeight,
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
            }}
        >
            <nav className="container-fluid h-100">
                <div className="d-flex align-items-center justify-content-between h-100 px-3 px-md-4">
                    {/* 로고 섹션 */}
                    <div className="d-flex align-items-center" style={{flexShrink: 0}}>
                        <a
                            href="#about"
                            className="navbar-brand d-flex align-items-center text-decoration-none"
                            style={{
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <img
                                src={Logo}
                                alt="Portfolio Logo"
                                className="rounded-circle bg-light"
                                style={{
                                    width: isTablet ? '40px' : '45px',
                                    height: isTablet ? '40px' : '45px',
                                    marginRight: '12px',
                                    flexShrink: 0,
                                    transition: 'all 0.3s ease'
                                }}
                            />
                            <span
                                className="text-white fw-bold"
                                style={{
                                    fontSize: isTablet ? '1.1rem' : '1.25rem',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Portfolio
                            </span>
                        </a>
                    </div>

                    {/* 네비게이션 메뉴 */}
                    <ul className="d-flex list-unstyled mb-0 align-items-center" style={{flexShrink: 0}}>
                        {navItems.map((item, index) => {
                            const sectionName = item.href.replace('#', '');
                            const isActive = activeSection === sectionName;

                            return (
                                <li key={index} className="me-2">
                                    <a
                                        href={item.href}
                                        className={`text-decoration-none position-relative d-block ${isActive ? 'active' : ''}`}
                                        style={{
                                            padding: isTablet ? '10px 16px' : '12px 20px',
                                            fontSize: isTablet ? '0.9rem' : '0.95rem',
                                            fontWeight: '500',
                                            whiteSpace: 'nowrap',
                                            borderRadius: '12px',
                                            color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                                            background: isActive
                                                ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'
                                                : 'transparent',
                                            border: `1px solid ${isActive ? 'rgba(255,255,255,0.3)' : 'transparent'}`,
                                            backdropFilter: isActive ? 'blur(10px)' : 'none',
                                            transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                                            boxShadow: isActive ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            overflow: 'hidden',
                                            pointerEvents: isActive ? 'none' : 'auto'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.target.style.color = '#ffffff';
                                                e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)';
                                                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                                                e.target.style.backdropFilter = 'blur(10px)';
                                                e.target.style.transform = 'translateY(-2px)';
                                                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.target.style.color = 'rgba(255,255,255,0.7)';
                                                e.target.style.background = 'transparent';
                                                e.target.style.borderColor = 'transparent';
                                                e.target.style.backdropFilter = 'none';
                                                e.target.style.transform = 'translateY(0)';
                                                e.target.style.boxShadow = 'none';
                                            }
                                        }}
                                    >
                                        {item.label}

                                        {/* 하단 활성 인디케이터 */}
                                        <span
                                            className="position-absolute bottom-0 start-50 translate-middle-x"
                                            style={{
                                                width: isActive ? '80%' : '0%',
                                                height: '2px',
                                                background: 'linear-gradient(90deg, #ffffff 0%, #6c757d 50%, #212529 100%)',
                                                borderRadius: '1px',
                                                transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default DesktopHeader;

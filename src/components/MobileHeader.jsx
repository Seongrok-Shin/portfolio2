import React, {useState, useEffect} from "react";
import "../scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        {href: "#about", label: "About"},
        {href: "#skills", label: "Skills"},
        {href: "#experience", label: "Experience"},
        {href: "#project", label: "Projects"}
    ];

    // 고정된 헤더 높이
    const headerHeight = '60px';

    return (
        <header
            className="position-fixed w-100"
            style={{
                top: '0',
                left: '0',
                right: '0',
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
            <div
                className="w-100 h-100 d-flex align-items-center justify-content-between"
                style={{
                    padding: '0 16px',
                    maxWidth: '100vw',
                    overflow: 'hidden'
                }}
            >
                {/* 로고 섹션 - 왼쪽 고정 */}
                <div className="d-flex align-items-center" style={{flexShrink: 0}}>
                    <a
                        href="#about"
                        className="d-flex align-items-center text-decoration-none"
                        onClick={closeMenu}
                        style={{
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Portfolio Logo"
                            className="rounded-circle bg-light"
                            style={{
                                width: '35px',
                                height: '35px',
                                flexShrink: 0,
                                transition: 'all 0.3s ease'
                            }}
                        />
                    </a>
                </div>

                {/* 햄버거 메뉴 버튼 - 오른쪽 고정 */}
                <button
                    className="btn p-0 border-0 d-flex align-items-center justify-content-center"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    style={{
                        background: 'transparent',
                        width: '44px',
                        height: '44px',
                        flexShrink: 0,
                        borderRadius: '8px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <div
                        className="hamburger-icon position-relative"
                        style={{
                            width: '20px',
                            height: '14px'
                        }}
                    >
                        {[0, 6, 12].map((top, index) => (
                            <span
                                key={index}
                                className="position-absolute"
                                style={{
                                    display: 'block',
                                    height: '2px',
                                    width: '100%',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '1px',
                                    left: 0,
                                    top: isMenuOpen
                                        ? index === 1 ? '6px' : '6px'
                                        : `${top}px`,
                                    transform: isMenuOpen
                                        ? index === 0 ? 'rotate(45deg)'
                                            : index === 2 ? 'rotate(-45deg)'
                                                : 'rotate(0)'
                                        : 'rotate(0)',
                                    opacity: isMenuOpen && index === 1 ? 0 : 1,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            />
                        ))}
                    </div>
                </button>
            </div>

            {/* 모바일 드롭다운 메뉴 */}
            <div
                className="position-fixed overflow-hidden"
                style={{
                    top: headerHeight,
                    left: '0',
                    right: '0',
                    width: '100vw',
                    maxHeight: isMenuOpen ? '240px' : '0',
                    opacity: isMenuOpen ? 1 : 0,
                    visibility: isMenuOpen ? 'visible' : 'hidden',
                    transition: 'maxHeight 0.3s ease-out, opacity 0.3s ease-out',
                    backgroundColor: 'rgba(33, 37, 41, 0.98)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 9998,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
            >
                <div style={{padding: '12px 16px'}}>
                    <ul className="list-unstyled mb-0">
                        {navItems.map((item, index) => {
                            const sectionName = item.href.replace('#', '');
                            const isActive = activeSection === sectionName;

                            return (
                                <li key={index} style={{marginBottom: '4px'}}>
                                    <a
                                        href={item.href}
                                        className="d-block text-decoration-none rounded-2"
                                        onClick={closeMenu}
                                        style={{
                                            padding: '10px 12px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            color: isActive ? '#ffffff' : 'rgba(255,255,255,0.85)',
                                            background: isActive
                                                ? 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)'
                                                : 'transparent',
                                            borderLeft: `2px solid ${isActive ? '#ffffff' : 'transparent'}`,
                                            transition: 'all 0.2s ease-out',
                                            transform: 'translateX(0)',
                                            overflow: 'hidden',
                                            display: 'block',
                                            textAlign: 'left'
                                        }}
                                        onTouchStart={(e) => {
                                            if (!isActive) {
                                                e.target.style.backgroundColor = 'rgba(255,255,255,0.06)';
                                            }
                                        }}
                                        onTouchEnd={(e) => {
                                            if (!isActive) {
                                                e.target.style.backgroundColor = 'transparent';
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default MobileHeader;

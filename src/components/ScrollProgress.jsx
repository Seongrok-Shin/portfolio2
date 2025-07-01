import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = scrollPx / winHeightPx;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed-top"
            style={{
                height: '4px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                zIndex: 9999,
            }}
        >
            <motion.div
                style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #2c2c2c, #1a1a1a)',
                    transformOrigin: '0%',
                }}
                initial={{scaleX: 0}}
                animate={{scaleX: scrollProgress}}
                transition={{duration: 0.1}}
            />
        </motion.div>
    );
};

export default ScrollProgress;

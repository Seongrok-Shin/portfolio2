import React from "react";
import {motion} from "framer-motion";

const BackgroundParticles = ({count = 6, color = "rgba(156,163,175,0.1)"}) => {
    return (
        <div
            className="position-absolute w-100 h-100 overflow-hidden"
            style={{
                top: 0,
                left: 0,
                zIndex: -1,
                pointerEvents: 'none'
            }}
        >
            {[...Array(count)].map((_, i) => {
                const size = Math.random() * 80 + 40; // 40-120px
                const leftPosition = Math.random() * 90; // 0-90% to ensure particles don't overflow
                const topPosition = Math.random() * 90; // 0-90% to ensure particles don't overflow

                return (
                    <motion.div
                        key={i}
                        className="position-absolute rounded-circle"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${leftPosition}%`,
                            top: `${topPosition}%`,
                            background: `radial-gradient(circle, ${color}, transparent)`,
                            opacity: 0.2,
                            maxWidth: '150px',
                            maxHeight: '150px'
                        }}
                        animate={{
                            y: [0, -15, 0],
                            x: [0, Math.random() * 15 - 7.5, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                    />
                );
            })}
        </div>
    );
};

export default BackgroundParticles;

import React from "react";
import {motion} from "framer-motion";

const BackgroundParticles = ({count = 6, color = "rgba(156,163,175,0.1)"}) => {
    return (
        <div className="position-absolute w-100 h-100" style={{top: 0, left: 0, zIndex: -1}}>
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    className="position-absolute rounded-circle opacity-20"
                    style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `radial-gradient(circle, ${color}, transparent)`
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundParticles;

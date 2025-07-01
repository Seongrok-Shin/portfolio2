import React from "react";
import {motion} from "framer-motion";

const SectionHeader = ({
                           title,
                           subtitle,
                           accent = "linear-gradient(90deg, #9ca3af, #6b7280)",
                           titleSize = "3.5rem",
                           className = "",
                           ...props
                       }) => {
    return (
        <motion.div
            initial={{y: -30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8}}
            className={`text-center mb-5 ${className}`}
            {...props}
        >
            <h1
                className="fw-bold text-white mb-4"
                style={{fontFamily: "'Lato', sans-serif", fontSize: titleSize}}
            >
                {title}
            </h1>
            <div
                className="mx-auto mb-4"
                style={{
                    width: "80px",
                    height: "4px",
                    background: accent
                }}
            />
            {subtitle && (
                <p
                    className="text-gray-400"
                    style={{fontSize: "1.3rem", maxWidth: "600px", margin: "0 auto"}}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;

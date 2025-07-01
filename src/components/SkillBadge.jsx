import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ skill, color, index = 0, isMobile = false }) => {
    const fontSize = isMobile ? "0.7rem" : "0.8rem";
    const padding = isMobile ? "4px 10px" : "5px 12px";

    return (
        <motion.span
            className="badge bg-dark text-light"
            style={{
                fontSize: fontSize,
                borderRadius: "12px",
                padding: padding,
                border: "1px solid #6b7280"
            }}
            whileHover={{
                scale: 1.1,
                backgroundColor: color,
                color: "white",
                borderColor: color
            }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.1 }
            }}
        >
            {skill}
        </motion.span>
    );
};

export default SkillBadge;

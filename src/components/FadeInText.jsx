import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FadeText = ({ children, isActive, directionY, setTime }) => {
    const dy = directionY;
    const duration = setTime;
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: dy }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: duration }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FadeText;


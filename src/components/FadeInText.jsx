import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";


const FadeText = ({ children, isActive, movement }) => {
    const dy = movement;
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: dy }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 1 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FadeText;


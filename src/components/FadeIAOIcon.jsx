import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";


const FadeIcon = ({ children, isActive }) => {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 10 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FadeIcon;


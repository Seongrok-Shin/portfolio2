import React from "react";
import {motion} from "framer-motion";

const CallToActionSection = ({
                                 title = "💡 Always Learning, Always Growing",
                                 description = "Every experience shapes who I am today. From academic achievements to hands-on challenges, I believe in continuous learning and pushing boundaries in technology.",
                                 buttonText = "📄 View Full Resume",
                                 onButtonClick,
                                 delay = 1.2
                             }) => {
    return (
        <motion.div
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay, duration: 0.8}}
            className="text-center mt-5"
        >
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div
                        className="p-4 rounded-4 text-white"
                        style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}
                    >
                        <h4 className="fw-bold mb-3">{title}</h4>
                        <p className="mb-4 text-gray-300" style={{fontSize: "1.1rem", lineHeight: "1.6"}}>
                            {description}
                        </p>

                        <motion.button
                            className="btn btn-outline-light btn-lg rounded-pill px-5 py-3"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderColor: "#9ca3af"
                            }}
                            whileTap={{scale: 0.95}}
                            style={{fontSize: "1.1rem", fontWeight: "600", borderColor: "#6b7280"}}
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CallToActionSection;

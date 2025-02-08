import React, { useCallback } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../scss/custom.scss";
import Icon from "../icon/Icon";

const Skills = () => {
  const isMobile = useCallback(() => {
    return window.innerWidth < 768;
  }, []);

  const getFontSize = useCallback(() => {
    return isMobile() ? "1em" : "2em";
  }, [isMobile]);

  const skillCategories = [
    {
      title: "Web Development",
      progress: 80,
      skills: [
        { name: "react", color: "skyblue", label: "React" },
        { name: "next", color: "black", label: "Next" },
        { name: "bootstrap", color: "purple", label: "Bootstrap" },
        { name: "tailwindcss", color: "skyblue", label: "Tailwind CSS" },
      ],
    },
    {
      title: "Desktop / Mobile",
      progress: 60,
      skills: [
        { name: "java", color: "orange", label: "Java" },
        { name: "python", color: "blue", label: "Python" },
        { name: "reactnative", color: "skyblue", label: "ReactNative" },
      ],
    },
    {
      title: "Data Science",
      progress: 50,
      skills: [
        { name: "r", color: "skyblue", label: "R" },
        { name: "python", color: "blue", label: "Python" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#222" }}
    >
      <motion.div
        className="row d-flex flex-wrap justify-content-center align-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className={isMobile() ? "col-12 col-md-4 col-lg-3 p-3" : "mt-3"}
            variants={cardVariants}
          >
            <motion.div
              className="skill-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-body rounded">
                <h6 className="fw-bold">
                  {category.title}
                  <motion.div
                    className="progress mt-2"
                    style={{ height: "0.5rem" }}
                  >
                    <motion.div
                      className="progress-bar progress-bar-striped bg-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </motion.div>
                </h6>
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      whileHover={{ y: -5 }}
                    >
                      <Icon
                        name={skill.name}
                        color={skill.color}
                        fontSize={getFontSize()}
                      />
                      <p className="p-2 iconText">{skill.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div
        className="d-block mt-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "75%",
        }}
      ></div>
    </section>
  );
};

export default Skills;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../scss/custom.scss";
import FadeText from "../components/FadeInText";

const Experience = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="experience"
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#222" }}
    >
      <div className="experience">
        <h1 className="mt-2 mb-3 rounded">Education</h1>
        <span></span>
        {isScrolled && (
          <div className="mb-3 experience-item">
            <FadeText isActive={true} directionY={-30} setTime={1}>
              <h4 className="mb-3 experience-title">
                Auckland University of Technology
              </h4>
              <h5>Mar 2021 - Dec 2023</h5>
              <p>
                As a student, I studied Software Development and Data Science in
                BCIS course for 3 years.
              </p>
            </FadeText>
          </div>
        )}
        <h1 className="mb-3 rounded">Event Experience</h1>
        <span></span>
        {isScrolled && (
          <div className="mb-3 experience-item">
            <FadeText isActive={true} directionY={-30} setTime={2}>
              <h4 className="mb-3 experience-title">GovHack 2022</h4>
              <h5>Aug 2022 - Aug 2022</h5>
              <p>
                As a back-end developer, I have created pipe lines for a web
                application.
              </p>
              <a className="text-muted" href="/#projects/#govhack2022">
                Find out more, you can check "Projects" seciton.
              </a>
            </FadeText>
          </div>
        )}
        {isScrolled && (
          <div className="mb-3 experience-item">
            <FadeText isActive={true} directionY={-30} setTime={3}>
              <h4 className="mb-3 experience-title">GovHack 2023</h4>
              <h5>Aug 2023 - Aug 2023</h5>
              <p className="text-white">
                As a front-end developer, I have created a web application.
              </p>
              <a className="text-muted" href="/#projects/#govhack2023">
                Find out more, you can check "Projects" seciton.
              </a>
            </FadeText>
          </div>
        )}
        <h1 className="mb-3 rounded">Professional Experience</h1>
        {isScrolled && (
          <div className="mb-3 experience-item">
            <FadeText isActive={true} directionY={-30} setTime={3}>
              <h4 className="mb-3 experience-title">Not gain yet</h4>
              <h5>Dec 2023 - Present</h5>
              <p>I have been looking for a job.</p>
            </FadeText>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;

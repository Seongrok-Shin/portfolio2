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
      style={{ height: "100vh" }}
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
            </FadeText>
          </div>
        )}
        {isScrolled && (
          <div className="mb-3 experience-item">
            <FadeText isActive={true} directionY={-30} setTime={3}>
              <h4 className="mb-3 experience-title">GovHack 2023</h4>
              <h5>Aug 2023 - Aug 2023</h5>
              <p>As a front-end developer, I have created a web application.</p>
            </FadeText>
          </div>
        )}
        <h1 className="mb-3 rounded">Professional Experience</h1>
        {isScrolled && (
          <div className="mb-3 experience-item">
            <FadeText isActive={true} directionY={-30} setTime={3}>
              <h4 className="mb-3 experience-title">Be Herd Limited</h4>
              <h5>July 2024 - Present</h5>
              <p>Founded startup company with a team.</p>
              <p>
                As a front-end engineer, I have created a progressive web
                application.
              </p>
              <p>
                Link: <a href="https://www.beherd.org/">Be Herd</a>
              </p>
            </FadeText>
          </div>
        )}
        {isScrolled && (
          <div className="mb-3 experience-item">
            <FadeText isActive={true} directionY={-30} setTime={3}>
              <h4 className="mb-3 experience-title">
                Netflix App Review Analysis
              </h4>
              <h5>Dec, 2024 - Feb, 2025</h5>
              <p>
                Built a full-stack web analytics platform for Netflix app review
                analysis using React, Python and AWS services.
              </p>
              <p>
                Created dashboards with Material-UI to visualize user sentiment
                trends and metrics.
              </p>
              <p>
                Link:{" "}
                <a href="http://clearvoice-demo.s3-website.ap-southeast-4.amazonaws.com/">
                  Netflix App Review Analysis
                </a>
              </p>
            </FadeText>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;

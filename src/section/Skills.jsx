import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../scss/custom.scss";
import FlowSkills from "../components/FlowSkills";
import Icon from "../icon/Icon";


const Skills = ({ getFontSize }) => {

  const isMobile = useCallback(() => {
    return window.innerWidth < 768;
  }, []);

  return (
    <section
      id="skills"
      className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center"
    >

      <div className="row d-flex flex-wrap justify-content-center align-items-center">
        <div className={isMobile() ? "col-12 col-md-4 col-lg-3 p-3" : "mt-3"}>
          <div className="card" style={{ borderColor: "#222", width: "100%" }}>
            <div
              className="card-body rounded"
            >
              <h6 className="fw-bold" style={{ fontFamily: "'lato', sans-serif" }}>Web Development
                <div className="progress mt-2" style={{ height: "0.5rem" }}>
                  <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: "80%", height: "100%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </h6>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="react" color="skyblue" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">React</p>
                <p>
                  <Icon name="next" color="black" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">Next</p>
                <p>
                  <Icon name="bootstrap" color="purple" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">Bootstrap</p>
                <p>
                  <Icon name="tailwindcss" color="skyblue" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
        <div className={isMobile() ? "col-12 col-md-4 col-lg-3 p-3" : "mt-3"}>
          <div className="card" style={{ borderColor: "#222", width: "100%" }}>
            <div
              className="card-body rounded"
            >
              <h6 className="fw-bold" style={{ fontFamily: "'lato', sans-serif" }}>Desktop/Mobile
                <div className="progress mt-2" style={{ height: "0.5rem" }}>
                  <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: "60%", height: "100%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </h6>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="java" color="orange" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">Java</p>
                <p>
                  <Icon name="python" color="blue" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">Python</p>
                <p>
                  <Icon name="reactnative" color="skyblue" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">ReactNative</p>
              </div>
            </div>
          </div>
        </div>
        <div className={isMobile() ? "col-12 col-md-4 col-lg-3 p-3" : "mt-3"}>
          <div className="card" style={{ borderColor: "#222", width: "100%" }}>
            <div
              className="card-body rounded"
            >
              <h6 className="fw-bold" style={{ fontFamily: "'lato', sans-serif" }}>Data Science
                <div className="progress mt-2" style={{ height: "0.5rem" }}>
                  <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: "50%", height: "100%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </h6>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="r" color="skyblue" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">R</p>
                <p>
                  <Icon name="python" color="blue" fontSize={getFontSize()} />
                </p>
                <p className="p-2 iconText">Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block mt-3">
        <FlowSkills />
      </div>
    </section>
  );
};

export default Skills;


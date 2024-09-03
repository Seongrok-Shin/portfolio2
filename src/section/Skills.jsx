import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../scss/custom.scss";
import FlowSkills from "../components/FlowSkills";
import Icon from "../icon/Icon";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#222" }}
    >
      <div className="p-5 d-block">
        <FlowSkills />
      </div>
      <div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="card" style={{ borderColor: "#ffd900" }}>
            <div
              className="card-body rounded"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h1 className="cardText">Front End</h1>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="react" color="skyblue" fontSize="1.5em" />
                </p>
                <p className="p-2 iconText">React</p>
              </div>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="next" color="black" fontSize="1.5em" />
                </p>
                <p className="p-2 iconText">Next</p>
              </div>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="bootstrap" color="purple" fontSize="1.5em" />
                </p>
                <p className="p-2 iconText">Bootstrap</p>
              </div>
            </div>
          </div>
          <span className="p-3"></span>
          <div className="card" style={{ borderColor: "#ffd900" }}>
            <div
              className="card-body rounded"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h1 className="cardText">Back End</h1>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="react" color="skyblue" fontSize="1.5em" />
                </p>
                <p className="p-2 iconText">React</p>
              </div>
            </div>
          </div>
          <span className="p-3"></span>
          <div className="card" style={{ borderColor: "#ffd900" }}>
            <div
              className="card-body rounded"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h1 className="cardText">Database</h1>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                  <Icon name="react" color="skyblue" fontSize="1.5em" />
                </p>
                <p className="p-2 iconText">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import Icon from "../icon/Icon";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Skills = () => {
    return (
        <div className="mb-1 container-fluid" style={{ backgroundColor: "#222", height: "100vh" }} id="skills">
            <h1 className="text-center text-white fw-bold" style={{ fontFamily: "'Roboto', sans-serif" }}>
                My Skills
            </h1>
            <div className="d-flex justify-content-center align-items-center py-5" >
                <div className="card p-5" style={{ backgroundColor: "#1a1816" }}>
                    <div className="card-body ">
                        <h2 className="card-title text-center text-white fw-bold" style={{ fontFamily: "'Roboto', sans-serif" }}>Web Development</h2>
                        <p className="card-text justify-content-center" >
                            <Icon name="html" hoverColor={"orange"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="javascript" hoverColor={"yellow"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="react" hoverColor={"skyblue"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="reactnative" hoverColor={"skyblue"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="next" hoverColor={"black"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="bootstrap" hoverColor={"purple"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="tailwindcss" hoverColor={"skyblue"} color={"white"} fontSize={"3em"} />
                            <Icon name="html" hoverColor={"orange"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="javascript" hoverColor={"yellow"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="react" hoverColor={"skyblue"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="reactnative" hoverColor={"skyblue"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="next" hoverColor={"black"} color={"white"} fontSize={"3em"} />
                            &nbsp;
                            <Icon name="bootstrap" hoverColor={"purple"} color={"white"} fontSize={"3em"} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
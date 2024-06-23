import React from "react";
import Icon from "../icon/Icon";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Skills = () => {
    return (
        <div>
            <p>
                <Icon name="html" hoverColor={"orange"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="javascript" hoverColor={"yellow"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="react" hoverColor={"skyblue"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="expo" hoverColor={"black"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="reactnative" hoverColor={"skyblue"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="next" hoverColor={"black"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="bootstrap" hoverColor={"purple"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="tailwindcss" hoverColor={"skyblue"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="node" hoverColor={"green"} color={"gray"} fontSize={"2.5em"} />
            </p>
            <p>
                <Icon name="java" hoverColor={"orange"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="php" hoverColor={"purple"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="mongo" hoverColor={"green"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="firebase" hoverColor={"orange"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="mysql" hoverColor={"blue"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="r" hoverColor={"skyblue"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="python" hoverColor={"blue"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="rstudio" hoverColor={"skyblue"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="git" hoverColor={"orange"} color={"gray"} fontSize={"2.5em"} />
                <Icon name="github" hoverColor={"black"} color={"gray"} fontSize={"2.5em"} />
            </p>
        </div>
    );
};

export default Skills;
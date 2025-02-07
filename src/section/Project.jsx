import React, { useCallback } from "react";
import CatchMole from "../assets/moles1.PNG";
import PipeWatch from "../assets/pipeWatch1.png";
import CatchUp from "../assets/catchUp1.jpg";
import GreenKiwi from "../assets/greenkiwi.jpg";
import Caito from "../assets/caito.jpg";
import Pepe from "../assets/pepe.jpg";
import Icon from "../icon/Icon";
import NetflixReview from "../assets/netflixReview.PNG";

const Project = () => {
  const isMobile = useCallback(() => {
    return window.innerWidth < 768;
  }, []);

  const getFontSize = useCallback(() => {
    return isMobile() ? "1.5em" : "2.5em";
  }, [isMobile]);

  return (
    <section id="project" className="project-section">
      <div className="container h-100">
        <div
          id="carouselExampleControls"
          className="carousel slide project-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="project-content">
                <img
                  src={CatchMole}
                  className="photo img-fluid"
                  alt="Catch Moles project"
                />
                <h3 className="carousel-text-head mt-3">Catch Moles</h3>
                <p className="carousel-text-subhead">
                  Date: May 2022 – June 2022
                  <br />
                  Used Technologies: Java
                  <br />
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="text-start carousel-text-body">
                    <p>
                      Built a Catch Moles game to people play game using Java.
                    </p>
                    <p>
                      There are two versions of the game: the GUI version and
                      the CLI version.
                    </p>
                    <p>
                      Worked on creating some components, features and DB in
                      both GUI and CUI version.
                    </p>

                    <p>
                      <a
                        href="https://github.com/Seongrok-Shin/catchMoles_GUIV/"
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <Icon
                          color="#ffffff"
                          fontSize={getFontSize()}
                          name="github"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000000">
              <div className="project-content">
                <img src={PipeWatch} alt="..." className="photo img-fluid" />
                <p className="carousel-text-head mt-3">Pipe Watch</p>
                <p className="carousel-text-subhead">
                  Date: Aug, 2022
                  <br />
                  Used Technologies: React, Python
                  <br />
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="text-start carousel-text-body">
                    <p>
                      Built a map-based website platform to help the NZ
                      community mitigate floods.
                    </p>
                    <p>
                      Worked on using Python as a Back-end and React as a
                      Front-end.
                    </p>
                    <p>
                      Map displays water levels in real-time using a web socket
                      communication.
                    </p>
                    <p>
                      The website surveys the rainwater and waste water pipe
                      system with its loads in Wellington.
                    </p>
                    <p>
                      <a
                        href="https://2022.hackerspace.govhack.org/projects/pipewatch"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          color="#ffffff"
                          fontSize={getFontSize()}
                          name="web"
                        />
                      </a>
                      <span className="p-3"></span>
                      <a
                        href="https://www.youtube.com/watch?v=jlI5YnXXx74"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          color="red"
                          fontSize={getFontSize()}
                          name="youtube"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000000">
              <div className="project-content">
                <img
                  src={CatchUp}
                  className="photo img-fluid"
                  alt="Catch Up project"
                />
                <p className="carousel-text-head mt-3">Catch Up</p>
                <p className="carousel-text-subhead">
                  Date: Aug 2022 – Oct 2022
                  <br />
                  Used Technologies: ReactNative, Expo, Firebase
                  <br />
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="text-start carousel-text-body">
                    <p>
                      Built a Facebook and Google map-like native mobile
                      application.
                    </p>
                    <p>
                      The application helps the NZ community to know the best
                      restaurant close to all the friends in the group.
                    </p>
                    <p>
                      Implemented chat using web socket API, and RESTful APIs
                      for friends list management and restaurant management.
                    </p>
                    <p>
                      <a
                        href="https://github.com/Seongrok-Shin/Catch-Up"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          color="#ffffff"
                          fontSize={getFontSize()}
                          name="github"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000000">
              <div className="project-content">
                <img
                  src={GreenKiwi}
                  className="photo img-fluid"
                  alt="GreenKiwi project"
                />
                <p className="carousel-text-head mt-3">GreenKiwi</p>
                <p className="carousel-text-subhead">
                  Date: Aug, 2023
                  <br />
                  Used Technologies: NextJS, ExpressJS, Firebase
                  <br />
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="text-start carousel-text-body">
                    <p>
                      Built a Facebook-like web application to help the NZ
                      community measure and reduce their carbon emissions
                      together.
                    </p>
                    <p>
                      Worked as a Front-end engineer and implemented
                      Facebook-style timelines.
                    </p>
                    <p>It displays community posts with an infinite scroll.</p>
                    <p>
                      Deployed using Vercel for out-of-the-box CI/CD pipelines.
                    </p>

                    <a
                      href="https://www.youtube.com/watch?v=FbNKT36Ebek"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        color="red"
                        fontSize={getFontSize()}
                        name="youtube"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000000">
              <div className="project-content">
                <img
                  src={Caito}
                  className="photo img-fluid"
                  alt="Workforce Intelligence System - Caito project"
                />
                <p className="carousel-text-head mt-3">
                  Workforce Intelligence System - Caito
                </p>
                <p className="carousel-text-subhead">
                  Date: Mar 2023 – Dec 2023
                  <br />
                  Used Technologies: React, Java, Firebase
                  <br />
                  This project is unable to be deployed.
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="text-start carousel-text-body">
                    <p>Collaborated with CAITO as a R&D project</p>
                    <p>
                      Integrated with Firebase for authentication and serverless
                      user data storage.
                    </p>
                    <p>
                      An educational website utilising JWT as an authentication.
                    </p>
                    <p>
                      Also there is a dashboard that shows charts with the
                      component system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000000">
              <div className="project-content">
                <img
                  src={Pepe}
                  className="photo img-fluid"
                  alt="Pepe the Helpie project"
                />
                <p className="carousel-text-head mt-3">Pepe the Helpie</p>
                <p className="carousel-text-subhead">
                  Date: Aug, 2024
                  <br />
                  Used Technologies: React
                  <br />
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="text-start carousel-text-body">
                    <p>
                      Built a Chrome extension to help people focus on their
                      work or study.
                    </p>
                    <p>Worked as a Front-end engineer.</p>
                    <p>
                      I implemented overlay dialogues on the web browser that
                      pops up when a certain event is fired.
                    </p>
                    <p>
                      <a
                        href="https://github.com/dawinkweon/terrible-pepe"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          color="#ffffff"
                          fontSize={getFontSize()}
                          name="github"
                        />
                      </a>
                      <span className="p-3"></span>
                      <a
                        href="https://youtu.be/QtwVVHi6JlA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          color="red"
                          fontSize={getFontSize()}
                          name="youtube"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <div className="project-content">
                <img
                  src={NetflixReview}
                  className="photo img-fluid"
                  alt="Netflix App Review Analysis"
                />
                <h3 className="carousel-text-head mt-3">
                  Netflix App Review Analysis
                </h3>
                <p className="carousel-text-subhead">
                  Date: Dec, 2024 – Feb, 2025
                  <br />
                  Used Technologies: AWS, Vite, React, Python, Terraform
                  <br />
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="text-start carousel-text-body">
                    <p>
                      Developed a dashboard website to display Netflix app
                      reviews, using React for the frontend and Python for the
                      backend.
                    </p>
                    <p>
                      Designed the website’s UI with Material-UI (MUI) for a
                      modern and responsive interface.{" "}
                    </p>
                    <p>Deployed the website on AWS.</p>
                    <p>
                      Utilized S3 for static hosting and data storage, ECS for
                      managing Dockerized services, and Lambda for serverless
                      functions.
                    </p>
                    <p>
                      <a
                        href="http://clearvoice-demo.s3-website.ap-southeast-4.amazonaws.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          color="#ffffff"
                          fontSize={getFontSize()}
                          name="web"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <Icon name="previousArrow" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <Icon name="nextArrow" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;

import CatchMole from "../assets/moles1.PNG";
import PipeWatch from "../assets/pipeWatch1.png";
import CatchUp from "../assets/catchUp1.jpg";
import GreenKiwi from "../assets/greenkiwi.jpg";
import Caito from "../assets/caito.jpg";
import Pepe from "../assets/pepe.jpg";
import NetflixReview from "../assets/netflixReview.PNG";

export const projectsData = [
        {
            id: 1,
            title: "Catch Moles",
            date: "May 2022 – June 2022",
            image: CatchMole,
            technologies: ["Java"],
            description: [
                "Built a Catch Moles game to people play game using Java.",
                "There are two versions of the game: the GUI version and the CLI version.",
                "Worked on creating some components, features and DB in both GUI and CUI version."
            ],
            links: [
                {
                    type: "GitHub",
                    url: "https://github.com/Seongrok-Shin/catchMoles_GUIV/",
                    icon: "github",
                    color: "#ffffff"
                }
            ]
        },
        {
            id: 2,
            title: "Pipe Watch",
            date: "Aug 2022",
            image: PipeWatch,
            technologies: ["React", "Python"],
            description: [
                "Built a map-based website platform to help the NZ community mitigate floods.",
                "Worked on using Python as a Back-end and React as a Front-end.",
                "Map displays water levels in real-time using a web socket communication.",
                "The website surveys the rainwater and waste water pipe system with its loads in Wellington."
            ],
            links: [
                {
                    type: "Website",
                    url: "https://2022.hackerspace.govhack.org/projects/pipewatch",
                    icon: "web",
                    color: "#ffffff"
                },
                {
                    type: "YouTube",
                    url: "https://www.youtube.com/watch?v=jlI5YnXXx74",
                    icon: "youtube",
                    color: "red"
                }
            ]
        },
        {
            id: 3,
            title: "Catch Up",
            date: "Aug 2022 – Oct 2022",
            image: CatchUp,
            technologies: ["React Native", "Expo", "Firebase"],
            description: [
                "Built a Facebook and Google map-like native mobile application.",
                "The application helps the NZ community to know the best restaurant close to all the friends in the group.",
                "Implemented chat using web socket API, and RESTful APIs for friends list management and restaurant management."
            ],
            links: [
                {
                    type: "GitHub",
                    url: "https://github.com/Seongrok-Shin/Catch-Up",
                    icon: "github",
                    color: "#ffffff"
                }
            ]
        },
        {
            id: 4,
            title: "GreenKiwi",
            date: "Aug 2023",
            image: GreenKiwi,
            technologies: ["Next.js", "Express.js", "Firebase"],
            description: [
                "Built a Facebook-like web application to help the NZ community measure and reduce their carbon emissions together.",
                "Worked as a Front-end engineer and implemented Facebook-style timelines.",
                "It displays community posts with an infinite scroll.",
                "Made user-friendly responsive design focused web application."
            ],
            links: [
                {
                    type: "Website",
                    url: "https://greenkiwi.vercel.app/",
                    icon: "web",
                    color: "#ffffff"
                },
                {
                    type: "GitHub",
                    url: "https://github.com/uoa-compsci399-s2-2023/capstone-project-team-34-code-critters",
                    icon: "github",
                    color: "#ffffff"
                }
            ]
        },
        {
            id: 5,
            title: "Caito",
            date: "Dec 2023 – Feb 2024",
            image: Caito,
            technologies: ["React", "Spring Boot"],
            description: [
                "Collaborated with CAITO as a R&D project",
                "Integrated with Firebase for authentication and serverless user data storage.",
                "An educational website utilising JWT as an authentication.",
                "Also there is a dashboard that shows charts with the component system."
    ],
    links: [
        {
            type: "",
            url: "",
            icon: "",
            color: ""
        },
        {
            type: "",
            url: "",
            icon: "",
            color: ""
        }
    ]
},
{
    id: 6,
        title
:
    "Pepe",
        date
:
    "Mar 2024 – Jun 2024",
        image
:
    Pepe,
        technologies
:
    ["React", "TypeScript"],
        description
:
    [
        "Built a Chrome extension to help people focus on their work or study.",
        "Worked as a Front-end engineer.",
        "I implemented overlay dialogues on the web browser that pops up when a certain event is fired."
    ],
        links
:
    [
        {
            type: "GitHub",
            url: "https://github.com/Seongrok-Shin/terrible-pepe",
            icon: "github",
            color: "#ffffff"
        },
        {
            type: "YouTube",
            url: "https://www.youtube.com/watch?v=QtwVVHi6JlA",
            icon: "youtube",
            color: "red"
        }
    ]
}
,
{
    id: 7,
        title
:
    "Netflix Review",
        date
:
    "Nov 2024 – Present",
        image
:
    NetflixReview,
        technologies
:
    ["React", "TypeScript", "AWS", "Vite", "Python", "Terraform", "FastAPI"],
        description
:
    [
        "Developed a dashboard website to display Netflix app reviews, using React for the frontend and Python for the backend.",
        "Designed the website’s UI with Material-UI (MUI) for a modern and responsive interface.",
        "Utilized S3 for static hosting and data storage, ECS for managing Dockerized services, and Lambda for serverless functions.",
        "Deployed the website on AWS."
    ],
        links
:
    [
        {
            type: "Website",
            url: "http://clearvoice-demo.s3-website.ap-southeast-4.amazonaws.com/",
            icon: "web",
            color: "#ffffff"
        }
    ]
}
]
;

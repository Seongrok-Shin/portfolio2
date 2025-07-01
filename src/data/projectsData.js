import CatchMole from "../assets/moles1.PNG";
import PipeWatch from "../assets/pipeWatch1.png";
import CatchUp from "../assets/catchUp1.jpg";
import GreenKiwi from "../assets/greenkiwi.jpg";
import Caito from "../assets/caito.jpg";
import Pepe from "../assets/pepe.jpg";
import NetflixReview from "../assets/netflixReview.PNG";
import BlogPlatform from "../assets/blog.PNG";
import ToDoList from "../assets/todolist.PNG";

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
                    type: "YouTube",
                    url: "https://www.youtube.com/watch?v=FbNKT36Ebek",
                    icon: "youtube",
                    color: "red"
                },
                {
                    type: "Website",
                    url: "https://2023.hackerspace.govhack.org/projects/green_kiwi",
                    icon: "web",
                    color: "#ffffff"
                }
            ]
        },
        {
            id: 5,
            title: "Caito",
            date: "Mar 2023 – Dec 2023",
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
            title:
                "Pepe",
            date:
                "Aug 2024",
            image:
            Pepe,
            technologies:
                ["React", "TypeScript"],
            description:
                [
                    "Built a Chrome extension to help people focus on their work or study.",
                    "Worked as a Front-end engineer.",
                    "I implemented overlay dialogues on the web browser that pops up when a certain event is fired."
                ],
            links:
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
            title:
                "Netflix Review",
            date:
                "Dec 2024 – Feb 2025",
            image:
            NetflixReview,
            technologies:
                ["React", "TypeScript", "AWS", "Vite", "Python", "Terraform", "FastAPI"],
            description:
                [
                    "Developed a dashboard website to display Netflix app reviews, using React for the frontend and Python for the backend.",
                    "Designed the website’s UI with Material-UI (MUI) for a modern and responsive interface.",
                    "Utilized S3 for static hosting and data storage, ECS for managing Dockerized services, and Lambda for serverless functions.",
                    "Deployed the website on AWS."
                ],
            links:
                [
                    {
                        type: "Website",
                        url: "http://clearvoice-demo.s3-website.ap-southeast-4.amazonaws.com/",
                        icon: "web",
                        color: "#ffffff"
                    }
                ]
        },
        {
            id: 8,
            title:
                "Blog Platform",
            date:
                "Feb 2025",
            image:
            BlogPlatform,
            technologies:
                ["Next", "TypeScript", "Neon", "GitHub Copilot", "Vercel"],
            description:
                [
                    "Developed a modern blog editor application featuring rich text formatting for an intuitive content creation experience.",
                    "Implemented a responsive design using Tailwind CSS, ensuring a seamless and visually appealing interface across all devices.",
                    "Integrated robust authentication and user management functionalities to provide secure access and personalized user experiences.",
                ],
            links:
                [
                    {
                        type: "Website",
                        url: "https://blog-platform-rose-nu.vercel.app/",
                        icon: "web",
                        color: "#ffffff"
                    },
                    {
                        type: "GitHub",
                        url: "https://github.com/Seongrok-Shin/blog-platform",
                        icon: "github",
                        color: "#ffffff"
                    }
                ]
        },
        {
            id: 9,
            title:
                "Todo Web App",
            date:
                "June 2025",
            image:
            ToDoList,
            technologies:
                ["ASP.NET Core", "Blazor", "Bootstrap", "Supabase", "GitHub Copilot", "Render"],
            description:
                [
                    "Developed a full-stack web application for personal TODO management, featuring secure user authentication and real-time data synchronization.",
                    "Implemented CRUD functionality for personal TODO items, allowing users to create, read, update, and delete tasks efficiently.",
                    "Enabled category-based organization and status tracking (TODO, IN PROGRESS, DONE) for comprehensive task management.",
                ],
            links:
                [
                    {
                        type: "Website",
                        url: "https://todo-list-wbav.onrender.com/",
                        icon: "web",
                        color: "#ffffff"
                    },
                    {
                        type: "GitHub",
                        url: "https://github.com/Seongrok-Shin/todo-list",
                        icon: "github",
                        color: "#ffffff"
                    }
                ]
        }
    ]
;

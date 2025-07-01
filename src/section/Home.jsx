import React, {Suspense} from "react";
import loadable from '@loadable/component';

// Code splitting for each section
const About = loadable(() => import("./About"));
const Header = loadable(() => import("../components/Header"));
const Footer = loadable(() => import("../components/Footer"));
const Experience = loadable(() => import("./Experience"));
const Project = loadable(() => import("./Project"));
const Skills = loadable(() => import("./Skills"));
const ScrollProgress = loadable(() => import("../components/ScrollProgress"));

// Loading component
const SectionLoader = () => (
    <div className="section-loader" style={{padding: '2rem', textAlign: 'center'}}>
        <div>Loading...</div>
    </div>
);

const Home = React.memo(() => {
    return (
        <main>
            <Suspense fallback={<SectionLoader/>}>
                <ScrollProgress/>
            </Suspense>

            <Suspense fallback={<SectionLoader/>}>
                <Header/>
            </Suspense>

            <Suspense fallback={<SectionLoader/>}>
                <About/>
            </Suspense>

            <Suspense fallback={<SectionLoader/>}>
                <Skills/>
            </Suspense>

            <Suspense fallback={<SectionLoader/>}>
                <Experience/>
            </Suspense>

            <Suspense fallback={<SectionLoader/>}>
                <Project/>
            </Suspense>

            <Suspense fallback={<SectionLoader/>}>
                <Footer/>
            </Suspense>
        </main>
    );
});

export default Home;

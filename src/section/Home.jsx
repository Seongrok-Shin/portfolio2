import * as React from "react";
import About from "./About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "./Experience";
import Project from "./Project";
import Skills from "./Skills";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {

    return (
        <main>
            <ScrollProgress/>
            <Header/>
            <About/>
            <Skills/>
            <Experience/>
            <Project/>
            <Footer/>
        </main>
    );
}
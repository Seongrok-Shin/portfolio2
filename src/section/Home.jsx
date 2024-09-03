import * as React from "react";
import About from "./About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "./Experience";
import Skills from "./Skills";
export default function Home() {

    return (
        <main>
            <Header />
            <About />
            <Skills />
            <Experience />
            <Footer />
        </main>
    );
}
import * as React from "react";
import About from "./About";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Footer />
        </main>
    );
}
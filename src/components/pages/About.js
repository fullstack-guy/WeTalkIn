// dependencies:
import React, { Component } from "react";

// ---- LAYOUTS:
import Header from "../layouts/Header";
import AboutBody from "../layouts/bodies/AboutBody";
import Footer from "../layouts/Footer";


const About = () => {
    return (

        <React.Fragment>

            <Header />
            <AboutBody />
            <Footer />

        </React.Fragment>

    );
};

export default About;
// dependencies:
import React, { Component } from "react";

// ---- LAYOUTS:
import Header from "../layouts/Header";
import EProgramsBody from "../layouts/bodies/EProgramsBody";
import Footer from "../layouts/Footer";



const EPrograms = () => {
    return (


        <React.Fragment>

            <Header />
            <EProgramsBody />
            <Footer />

        </React.Fragment>

    );
};

export default EPrograms;
// dependencies:
import React, { Component } from "react";

// ---- LAYOUTS:
import Header from "../layouts/Header";
import NetworkinBody from "../layouts/bodies/NetworkinBody";
import Footer from "../layouts/Footer";


class Networkin extends Component {
    render () {
        return (

            <React.Fragment>

                <Header />
                <NetworkinBody />
                <Footer />

            </React.Fragment>

        );
    }
}

export default Networkin;
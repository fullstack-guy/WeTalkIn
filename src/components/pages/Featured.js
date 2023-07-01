// dependencies:
import React, { Component } from "react";

// ---- LAYOUTS:
import Header from "../layouts/Header";
import FeaturedBody from "../layouts/bodies/FeaturedBody";
import Footer from "../layouts/Footer";


class Featured extends Component {
    render () {
        return (

            <React.Fragment>

                <Header />
                <FeaturedBody />
                <Footer />

            </React.Fragment>

        );
    }
}

export default Featured;
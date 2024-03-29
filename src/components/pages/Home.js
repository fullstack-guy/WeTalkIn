// dependencies:
import React, { Component } from "react";

// ---- LAYOUTS:
import Header from "../layouts/Header";
import HomeBody from "../layouts/bodies/HomeBody";
import Footer from "../layouts/Footer";


class Home extends Component {
    render () {
        return (

            <React.Fragment>

                <Header />
                <HomeBody />
                <Footer />

            </React.Fragment>

        );
    }
}

export default Home;
// dependencies:
import React, { Component } from "react";

// ---- LAYOUTS:
import Header from "../layouts/Header";
import ContentBody from "../layouts/bodies/ContentBody";
import Footer from "../layouts/Footer";


class Content extends Component {
    render () {
        return (

            <React.Fragment>

                <Header />
                <ContentBody />
                <Footer />

            </React.Fragment>

        );
    }
}

export default Content;
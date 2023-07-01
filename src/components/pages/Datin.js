// dependencies:
import React, { Component } from "react";

// ---- LAYOUTS:
import Header from "../layouts/Header";
import DatinBody from "../layouts/bodies/DatinBody";
import Footer from "../layouts/Footer";


class Datin extends Component {
    render () {
        return (

            <React.Fragment>

                <Header />
                <DatinBody />
                <Footer />

            </React.Fragment>

        );
    }
}

export default Datin;
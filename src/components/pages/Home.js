// dependencies:
import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";

// ---- PAGES:
// ---- LAYOUTS:
import Header from "../layouts/Header";
import Body from "../layouts/Body";
import Footer from "../layouts/Footer";
// ---- COMPONENTS:


class Home extends Component {
    render () {
        return (

            <React.Fragment>

                <Header />

                <Body />

                <Footer />

            </React.Fragment>


        );
    }
}

export default Home;
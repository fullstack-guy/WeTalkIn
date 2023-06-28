// dependencies:
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ---- COMPONENTS:
import HomeBody from "../../bodies/Home";
import Featured from "../../bodies/Featured";
import Networkin from "../../bodies/Networkin";
import Datin from "../../bodies/Datin";
import About from "../../bodies/About";
import Contact from "../../bodies/Contact";

// ---- files:
import "./style.css";



const Body = () => {
    return (

        <Router>
            <Routes>


                <Route path="/" element={ <HomeBody /> } />
                <Route path="/featured" element={ <Featured /> } />
                <Route path="/networkin" element={ <Networkin /> } />
                <Route path="/🔥" element={ <Datin /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />


            </Routes>
        </Router>

    );
};

export default Body;
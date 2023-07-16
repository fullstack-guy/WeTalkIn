// dependencies:
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// ---- PAGES:
import Home from './components/pages/Home'
import Featured from './components/pages/Featured';
import Networkin from './components/pages/Networkin';
import Datin from './components/pages/Datin';
import Content from './components/pages/Content';
import EPrograms from './components/pages/ePrograms';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact';

// ---- files:
import './styles/App.css';


function App () {
    return (


        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/featured" element={ <Featured /> } />
                <Route path="/networkin" element={ <Networkin /> } />
                <Route path="/🔥" element={ <Datin /> } />
                <Route path="/📸" element={ <Content /> } />
                <Route path="/📚" element={ <EPrograms /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
        </Router>


    );
}

export default App;
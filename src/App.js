// dependencies:
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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


        <Router basename="WeTalkin___React">
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/featured" component={ Featured } />
                <Route path="/networkin" component={ Networkin } />
                <Route path="/🔥" component={ Datin } />
                <Route path="/📸" component={ Content } />
                <Route path="/📚" component={ EPrograms } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
            </Switch>
        </Router>


    );
}

export default App;
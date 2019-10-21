import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import './Navigation.css';
import Publications from './Publications';
import Introduction from './Introduction';
import App from './App';

function Navigation() {
    return (
        <Router>
        <ul className="Nav">
        <li><a href="https://github.com/decaf-project/DECAF/wiki">WikiPage</a></li>
            <li><Link to= "/Publications">Publications</Link></li>
            <li><Link to= "/Introduction">Introduction</Link></li>
            <li><Link to= "/">DECAF++</Link></li>
        </ul>
        <Route
            path="/Publications"
            component={Publications}
        />
        <Route
            path="/Introduction"
            component={Introduction}
        />
        {/* <Route
            path="/"
            component={App}
        /> */}
        </Router>
    );
}

export default Navigation;
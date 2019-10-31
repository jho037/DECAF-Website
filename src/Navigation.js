import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './Navigation.css';
import Publications from './Publications';
import Introduction from './Introduction';
import App from './App';
import DecafSum from './DecafSum';

function Navigation() {
    return (
        <Router>
            <div>
            <ul className="Nav">
                <li><a href="https://github.com/decaf-project/DECAF/wiki">WikiPage</a></li>
                <li><Link to= "/publications">Publications</Link></li>
                <li><Link to= "/introduction">Introduction</Link></li>
                <li><Link to= "/"><b>DECAF</b></Link></li>
            </ul>
            
            <Switch>
                <Route exact path="/">
                    <DecafSum />
                </Route>
                <Route path="/publications">
                    <Publications />
                </Route>
                <Route path="/introduction">
                    <Introduction />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}

export default Navigation;
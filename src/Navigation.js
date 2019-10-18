import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <ul className="Nav">
            <li className="DECAF"><a class="active" href = "https://github.com/jho037/DECAF-website">DECAF++</a></li>
            <li><a href="https://www.google.com">Publications</a></li>
            <li><a href="https://www.yahoo.com">WikiPage</a></li>
            <li><a href="https://www.bing.com">Introduction</a></li>
        </ul>
    );
}

export default Navigation;
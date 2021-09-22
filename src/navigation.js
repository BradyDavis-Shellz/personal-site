import React from 'react';
import {NavLink} from 'react-router-dom';

const activeClassName = 'current';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <NavLink
                    activeClassName={activeClassName}
                    exact
                    to="/"
                >
                    {'Home'}
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName={activeClassName}
                    exact
                    to="/about"
                >
                    {'About'}
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName={activeClassName}
                    exact
                    to="/contact"
                >
                    {'Contact'}
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;

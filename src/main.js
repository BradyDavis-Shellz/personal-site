import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './client/components/home';
import About from './client/components/about';
import Contact from './client/components/contact';

const Main = () => (
    <Switch>
        <Route
            component={Home}
            exact
            path="/"
        />
        <Route
            component={About}
            exact
            path="/about"
        />
        <Route
            component={Contact}
            exact
            path="/contact"
        />
    </Switch>
);

export default Main;

import {NavLink, Switch, Route} from 'react-router-dom';

import Home from './client/components/home';
import About from './client/components/about';
import Contact from './client/components/contact';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
);

export default Main;
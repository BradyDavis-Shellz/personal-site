import {NavLink} from 'react-router-dom';

const activeClassName = 'current';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName={activeClassName} to={'/'}>Home</NavLink></li>
            <li><NavLink exact activeClassName={activeClassName} to={'/about'}>About</NavLink></li>
            <li><NavLink exact activeClassName={activeClassName} to={'/contact'}>Contact</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;
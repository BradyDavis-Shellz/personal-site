import React from 'react';

import Navigation from './navigation';
import Main from './main';
import './App.css';

const App = () => (
    <div className="app">
        <h1>{'Personal Website for Brady Davis'}</h1>
        <Navigation />
        <Main />
    </div>
);

export default App;

import React from 'react';
import styled from 'styled-components';

import Navigation from './navigation';
import Main from './main';
import './App.css';

const NameHeader = styled.h1`
    color: maroon;
    display: flex;
    font-family: "Trebuchet MS";
    justify-content: center;
    margin: 25px 0 25px 0;
`;

const App = () => (
    <div className="app">
        <NameHeader>{'Brady Davis'}</NameHeader>
        <Navigation />
        <Main />
    </div>
);

export default App;

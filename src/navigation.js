import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavList = styled.ul`
    list-style: none;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
`;

const StyledNavListItem = styled.li`
    padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-family: "Trebuchet MS";
`;

const activeNavStyle = {
    color: 'maroon'
};

const activeClassName = 'current';

const Navigation = () => (
    <nav>
        <StyledNavList>
            <StyledNavListItem>
                <StyledNavLink
                    activeStyle={activeNavStyle}
                    exact
                    to="/"
                >
                    {'Home'}
                </StyledNavLink>
            </StyledNavListItem>
            <StyledNavListItem>
                <StyledNavLink
                    activeStyle={activeNavStyle}
                    exact
                    to="/about"
                >
                    {'About'}
                </StyledNavLink>
            </StyledNavListItem>
            <StyledNavListItem>
                <StyledNavLink
                    activeStyle={activeNavStyle}
                    exact
                    to="/contact"
                >
                    {'Contact'}
                </StyledNavLink>
            </StyledNavListItem>
        </StyledNavList>
    </nav>
);

export default Navigation;

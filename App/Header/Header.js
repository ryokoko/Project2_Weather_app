import React from 'react';

import styled from 'styled-components';

import Flex from '../../Components/Flex';

const Navbar = styled(Flex)`
    flex-direction: row;
    background-image: linear-gradient(#d4d8e2, transparent);
    padding: 3% 5%;
`;

const Logo = styled.div`
    flex: 25%;
    text-align: center;
    font-family: 'Trebuchet MS', sans-serif;
    color: #9c75b1;
    font-size: 1.5rem;
`;

const HeadInfo = styled.div`
    flex: 55%;
    text-align: center;
`;

const SearchBar = styled.div`
    flex: 20%;
`;
const Header = () => (
    <div>
        <Navbar>
            <Logo>ZEN Weather</Logo>
            <HeadInfo>Sunday, 23 May 2021</HeadInfo>
            <SearchBar>Search for city... </SearchBar>
        </Navbar>
    </div>
)

export default Header;
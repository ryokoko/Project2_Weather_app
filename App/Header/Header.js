import React from 'react';

import styled from 'styled-components';

import Flex from '../../Components/Flex';

const Navbar = styled(Flex)`
    flex-direction: row;
    background-image: linear-gradient(#d4d8e2, transparent);
    padding: 3% 5%;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;

`;

const Logo = styled.div`
    flex: 25%;
    text-align: center;
    color: #9c75b1;
    font-weight: 600;
`;

const HeadInfo = styled.div`
    flex: 75%;
    text-align: center;
`;

const Header = () => (
    <div>
        <Navbar>
            <Logo>ZEN Weather</Logo>
            <HeadInfo>Sunday, 23 May 2021</HeadInfo>
        </Navbar>
    </div>
)

export default Header;
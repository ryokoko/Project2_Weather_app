import React from 'react';

import styled from 'styled-components';

import Flex from '../../Components/Flex';
import CurrentDate from '../CurrentDate';

const Navbar = styled(Flex)`
    flex-direction: row;
    background-color: transparent;
    color: #676d6d;
    padding: 3% 5%;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
`;

const Logo = styled.div`
    flex: 25%;
    text-align: center;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;


const Header = () => {
    return (
    <Navbar>
        <Logo>.Weather</Logo>
        <CurrentDate />
    </Navbar>
)}

export default Header;
import React from 'react';

import styled from 'styled-components';

import Flex from '../../Components/Flex';

const Navbar = styled(Flex)`
    flex-direction: row;
    background-image: linear-gradient(#d4d8e2, transparent);
    padding: 3% 5%;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    width: 100%;

`;

const Logo = styled.div`
    flex: 25%;
    text-align: center;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const HeaderDate = styled.div`
    flex: 75%;
    text-align: center;
    @media (max-width: 768px) {
        font-size:0.9rem;
    }
`;

const Header = ({ date }) => {
    return (
    <div>
        <Navbar>
            <Logo>.Weather</Logo>
            <HeaderDate>{`${date}`}</HeaderDate>
        </Navbar>
    </div>
)}

export default Header;
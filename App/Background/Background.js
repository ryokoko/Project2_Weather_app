import React from 'react';
import Header from '../Header';
import WeatherContainer from '../WeatherContainer';
import Footer from '../Footer';
import styled from 'styled-components';

const OverallBg = styled.div`
    background-color: #fff8dc;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
`;

const Background = () => (
    <div>
        <OverallBg>
        <Header />
        <WeatherContainer />
        <Footer />
        </OverallBg>
        
    </div>
)

export default Background;
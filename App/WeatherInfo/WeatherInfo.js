import React from 'react';

import Flex from '../../Components/Flex';

import SearchBar from '../SearchBar';
import WeatherDetails from '../WeatherDetails';
import styled from 'styled-components';

const WeatherInfoWrapper = styled(Flex)`
    flex: 35%;
    background-color: #5f6e6642;
    backdrop-filter: blur(6px);
    flex-direction: column;
`;

const WeatherInfo = () => (
    <WeatherInfoWrapper>
        <SearchBar />
        <WeatherDetails />
    </WeatherInfoWrapper>

)

export default WeatherInfo;
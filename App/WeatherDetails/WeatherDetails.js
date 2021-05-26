import React from 'react';

import Flex from '../../Components/Flex';

import SearchBar from '../../App/SearchBar';
import styled from 'styled-components';

const WeatherDetailWrapper = styled(Flex)`
    flex: 35%;
    background-color: #5f6e6642;
    backdrop-filter: blur(6px);
    flex-direction: column;
`;

const WeatherDetails = () => (
    <WeatherDetailWrapper>
        <SearchBar />
    </WeatherDetailWrapper>

)

export default WeatherDetails;
import React from 'react';
import WeatherInfo from '../WeatherInfo';
import WeatherDetails from '../WeatherDetails';

import styled from 'styled-components';
import Flex from '../../Components/Flex';


const Wrapper = styled(Flex)`
    flex-direction: row;
    align-items: stretch;
    height: 100%;

`;

const WeatherContainer = () => (
    <Wrapper>
        <WeatherInfo />
        <WeatherDetails />
    </Wrapper>

)

export default WeatherContainer;
import React from 'react';
import WeatherOverview from '../WeatherOverview';
import WeatherInfo from '../WeatherInfo';

import styled from 'styled-components';
import Flex from '../../Components/Flex';


const Wrapper = styled(Flex)`
    flex-direction: row;
    align-items: stretch;
    height: 100%;

`;

const WeatherContainer = () => (
    <Wrapper>
        <WeatherOverview />
        <WeatherInfo />
    </Wrapper>

)

export default WeatherContainer;
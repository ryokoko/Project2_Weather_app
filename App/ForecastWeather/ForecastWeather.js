import React from 'react';

import Flex from '../../Components/Flex';

import SearchBar from '../SearchBar';
import OneDayForecast from '../OneDayForecast';
import FiveDayForecast from '../FiveDayForecast';
import styled from 'styled-components';

const ForecastContainer = styled(Flex)`
    flex: 35%;
    background-color: #5f6e6642;
    backdrop-filter: blur(6px);
    flex-direction: column;
`;

const ForecastWeather = ({ city, wind, humidity, maxTemp, minTemp, fiveDayForecast, onChange, onSearch }) => (
    <ForecastContainer>
        <SearchBar 
            city={city}
            onChange={onChange}
            onSearch={onSearch}
        />
        <OneDayForecast wind={wind} humidity={humidity} maxTemp={maxTemp} minTemp={minTemp} />
        <FiveDayForecast fiveDayForecast={fiveDayForecast}/>
    </ForecastContainer>

)

export default ForecastWeather;
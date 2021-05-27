import { WeatherSunny } from '@styled-icons/fluentui-system-filled/WeatherSunny';
import React from 'react';
import Flex from '../../Components/Flex';
import Header from '../../App/Header';
import styled from 'styled-components';

const WeatherOverviewWrapper = styled.div`
    flex: 65%;
`;

const WeatherOverviewBox = styled(Flex)`
    flex-direction: row;
    text-align: center;
    margin-top: 400px;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
`;
const CurrentTemp = styled.div`
    font-size: 5rem;
`;

const CurrentCity = styled.div`
    font-size: 3rem;
    padding: 0 2%;
`;

const CurrentWeather = styled.div`

`;
const CurrentWeatherIcon = styled(WeatherSunny)`
    height: 100px;
    width: 100px;
`;
const WeatherStat = styled.div`
    font-size: 1.5rem;
`;
const WeatherOverview = () => (
    <WeatherOverviewWrapper>
        <Header />
        <WeatherOverviewBox>
            <CurrentTemp>16&#176;</CurrentTemp>
            <CurrentCity>Canberra</CurrentCity>
            <CurrentWeather>
                <CurrentWeatherIcon />
                <WeatherStat>Sunny</WeatherStat>
            </CurrentWeather>
        </WeatherOverviewBox>
    </WeatherOverviewWrapper>


)

export default WeatherOverview;
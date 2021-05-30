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
    @media (max-width: 768px) {
        margin-top: 100px;
        margin-bottom: 50px;
        margin-left: 5%;
    }
`;
const CurrentTemp = styled.div`
    font-size: 5rem;
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const CurrentCity = styled.div`
    font-size: 3rem;
    padding: 0 2%;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const CurrentWeather = styled.div`

`;
const CurrentWeatherIcon = styled.div`
    height: 60px;
    width: 60px;
`;
const WeatherStat = styled.div`
    font-size: 1.5rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;


const WeatherOverview = ( { date, temp, city, icon, condition } ) => (
    
    <WeatherOverviewWrapper>
        <Header currentDate={date} />
        <WeatherOverviewBox>
            <CurrentTemp>{`${ temp }`} &#176;</CurrentTemp>
            <CurrentCity>{`${ city }`}</CurrentCity>
            <CurrentWeather>
                <CurrentWeatherIcon>{`${ icon }`}</CurrentWeatherIcon>
                <WeatherStat>{`${ condition }`}</WeatherStat>
            </CurrentWeather>
        </WeatherOverviewBox>
    </WeatherOverviewWrapper>


)

export default WeatherOverview;
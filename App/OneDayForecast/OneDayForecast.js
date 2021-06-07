import React from 'react';

import styled from 'styled-components';
import Flex from '../../Components/Flex';



const DetailContainer = styled.div`
    margin: 35px;
`;

const WeatherTitle = styled.div`
    border-bottom: 1.2px solid #cfcfd2;
    color: #ebeff1;
    padding: 10px 0px;
    font-size: 1.2rem;
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const DetailedWeather = styled(Flex)`
    flex-direction: column;
    div {
        padding-top: 20px;
        font-size: 1.1rem;
        color: #e4e4e4;
    }
    span {
        color: #ffffff;
        float: right;
    }
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }


`;


const OneDayForecast = ({ wind, humidity, maxTemp, minTemp }) => {
    return (
        <DetailContainer>
            <WeatherTitle>Weather Details</WeatherTitle>
            <DetailedWeather>
                <div>Temperature &#176;C: <span> {maxTemp} / {minTemp}</span></div>
                <div>Wind: <span>{wind} km/h</span></div>
                <div>Humidity: <span>{humidity} %</span></div>
            </DetailedWeather>
        </DetailContainer>
    )
}

export default OneDayForecast;
import React from 'react';

import styled from 'styled-components';
import Flex from '../../Components/Flex';

import FiveDayForecast from '../FiveDayForecast';

import axios from 'axios';

const DetailWrapper = styled.div`
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

class WeatherDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            temp_min: '--',
            temp_max: '--',
            wind: '--',
            humidity: '--',
        }

    }
/* 
    componentDidMount() {
        axios
            .get('http://api.weatherapi.com/v1/current.json?key=cec7f5d329c14edbb7031703212805&q=canberra&days=5')
            .then((response) => console.log(response))
            .catch((error) => console.log(error))

    } */


    render() {
        const { temp_min, temp_max, wind, humidity } = this.state;

        return (
            <DetailWrapper>
                <WeatherTitle>Weather Details</WeatherTitle>
                <DetailedWeather>
                    <div>Temperature &#176;C: <span>{`${temp_min} / ${temp_max}`}</span></div>
                    <div>Wind: <span>{wind} km/h</span></div>
                    <div>Humidity: <span>{humidity} %</span></div>
                </DetailedWeather>
                <FiveDayForecast />
            </DetailWrapper>
        )
    }
}

export default WeatherDetails;
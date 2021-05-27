import React from 'react';

import styled from 'styled-components';
import Flex from '../../Components/Flex';

import FiveDayForecast from '../FiveDayForecast';

const DetailWrapper = styled.div`
    margin: 35px;


`;

const WeatherTitle = styled.div`
    border-bottom: 1.2px solid #cfcfd2;
    color: #ebeff1;
    padding: 10px 0px;
    font-size: 1.2rem;
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


    render() {
        const { temp_min, temp_max, wind, humidity } = this.state;

        return (
            <DetailWrapper>
                <WeatherTitle>Weather Details</WeatherTitle>
                <DetailedWeather>
                    <div>Temperature &#176;C: <span>{`${temp_min} / ${temp_max}`}</span></div>
                    <div>Wind: <span>{wind} km/h</span></div>
                    <div>Humidity: <span>{humidity} %</span></div>
                    <FiveDayForecast />
                </DetailedWeather>


            </DetailWrapper>
        )
    }
}

export default WeatherDetails;
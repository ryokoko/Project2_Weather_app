import React from 'react';
import WeatherOverview from '../WeatherOverview';
import WeatherInfo from '../WeatherInfo';

import styled from 'styled-components';
import Flex from '../../Components/Flex';

/* import axios from 'axios'; */


const Wrapper = styled(Flex)`
    flex-direction: row;
    align-items: stretch;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction:column;
        width: 100%;
    }

`;

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            currentDateAndTime: null,
            currentTemp: '--',
            currentCity: '--',
            currentWeather: '--',
            currentWeatherIcon: null,
        }
    }

    componentDidMount() {
        /* fetch('http://api.openweathermap.org/data/2.5/weather?q=Canberra&appid=e48f7f46ea5efdfed61f45f51c482df2&units=metric', {
            method: 'GET',
        })    */
        fetch('https://api.weatherapi.com/v1/current.json?key=cec7f5d329c14edbb7031703212805&q=canberra&aqi=no', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            this.setState({
                currentTemp: result.current.temp_c,
                currentWeather: result.current.condition.text,
                currentCity: result.location.name,
                currentWeatherIcon: result.current.condition.icon,
                currentDateAndTime: result.location.localtime,
            });
        })
        .catch((error) => error && alert(error.message));
    }

    render() {
        const { currentDateAndTime, currentTemp, currentCity, currentWeather, currentWeatherIcon } = this.state;
        return(
            <Wrapper>
                <WeatherOverview date={currentDateAndTime} temp={currentTemp} city={currentCity} icon={currentWeatherIcon} condition={currentWeather}>
                </WeatherOverview>
                <WeatherInfo />
            </Wrapper>
        )
    }

}

export default WeatherContainer;
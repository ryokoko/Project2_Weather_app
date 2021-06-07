import React from 'react';
import CurrentWeather from '../CurrentWeather';
import ForecastWeather from '../ForecastWeather';

import styled from 'styled-components';
import Flex from '../../Components/Flex';

/* import axios from 'axios'; */


const Container = styled(Flex)`
    background-image: url('../src/Images/sunny.jpg'); /* 用的是html文件的relative path */
    background-size: auto;
    background-repeat: no-repeat;
    flex-direction: row;
    align-items: stretch;
    height: 100vh;
    @media (max-width: 768px) {
        flex-direction:column;
        width: 100%;
    }

`;

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            currentTemp: '--',
            currentCity: '--',
            currentWeather: '--',
            currentWeatherIcon: null,
            humidity: '--',
            wind: '--',
            maxTemp: '--',
            minTemp: '--',
            city: '',
        }
        this.getWeather = this.getWeather.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        Promise.all([fetch('https://api.weatherapi.com/v1/forecast.json?key=cec7f5d329c14edbb7031703212805&q=canberra&days=1&aqi=no&alerts=no'), 
        fetch('https://api.weatherapi.com/v1/forecast.json?key=cec7f5d329c14edbb7031703212805&q=canberra&days=5&aqi=no&alerts=no')])
       
        .then(([res1, res2]) => {
            return Promise.all([res1.json(), res2.json()]);
        })
        .then(([result1, result2]) => {
            this.setState({
                currentTemp: result1.current.temp_c,
                currentWeather: result1.current.condition.text,
                currentCity: result1.location.name,
                currentWeatherIcon: result1.current.condition.icon,
                wind: result1.current.wind_kph,
                humidity: result1.current.humidity,
                maxTemp: result1.forecast.forecastday[0].day.maxtemp_c,
                minTemp: result1.forecast.forecastday[0].day.mintemp_c,
                fiveDayForecast: result2.forecast.forecastday,
            });
            /* console.log(result1); */
            /* console.log(this.state.fiveDayForecast); */

        })
        .catch((error) => error && alert(error.message));
        
    }
    

    handleInputChange(e) {
        /* console.log(100, e.target.value)  */
        const { value } = e.target;
        this.setState({
            city: value,
        }, () => console.log(this.state.city))       
    }
    getWeather() {
        const { city } = this.state;
        fetch(`https://api.weatherapi.com/v1/current.json?key=cec7f5d329c14edbb7031703212805&q=${city}&aqi=no`, {
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
            });
        })
        .catch((error) => error && alert(error.message));       
    }



    render() {
        const { currentTemp, currentCity, currentWeather, currentWeatherIcon, humidity, wind, city, maxTemp, minTemp, fiveDayForecast } = this.state;
        return(
            <Container>
                <CurrentWeather 
                temp={currentTemp} 
                currentCity={currentCity} 
                icon={currentWeatherIcon} 
                condition={currentWeather}>
                </CurrentWeather>
                <ForecastWeather city={city} 
                humidity={humidity} wind={wind} 
                maxTemp={maxTemp} minTemp={minTemp} 
                fiveDayForecast={fiveDayForecast} 
                onChange={this.handleInputChange} onSearch={this.getWeather} />
            </Container>
        )
    }

}

export default WeatherContainer;
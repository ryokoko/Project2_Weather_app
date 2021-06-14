import React from 'react';
import CurrentWeather from '../CurrentWeather';
import ForecastWeather from '../ForecastWeather';

import styled from 'styled-components';
import Flex from '../../Components/Flex';
import API_KEY from '../../src/env';

/* import axios from 'axios'; */


const Container = styled(Flex)`
    background-image: url('../src/Images/cloudy.jpg'); /* 用的是html文件的relative path */
    background-size: cover;
    background-repeat: repeat-y;
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
            currentTemp: '',
            currentCity: '',
            currentWeather: '',
            currentWeatherIcon: null,
            humidity: '--',
            wind: '--',
            maxTemp: '--',
            minTemp: '--',
            city: '',
            fiveDayForecast: [],
        }
        this.getWeather = this.getWeather.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    

    componentDidMount() {
        function getTemp(temp) {
            return Math.round(temp);
        };
        function getIconImg(icon) {
            return `http://openweathermap.org/img/wn/${icon}@2x.png`;
        };
        const CANBERRA_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=canberra&appid=${API_KEY}&units=metric`;
        //const CANBERRA_5DAYS = `https://api.openweathermap.org/data/2.5/forecast?q=canberra&appid=${API_KEY}&units=metric`;
        fetch(CANBERRA_CURRENT, {
            method: 'GET',
        })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
           
            
            this.setState({
                currentTemp: getTemp(result.main.temp),
                currentWeather: result.weather[0].main,
                currentCity: result.name,
                currentWeatherIcon: getIconImg(result.weather[0].icon),
                wind: result.wind.speed,
                humidity: result.main.humidity,
                maxTemp: getTemp(result.main.temp_max),
                minTemp: getTemp(result.main.temp_min),
            });
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
        function getTemp(temp) {
            return Math.round(temp);
        };
        function getIconImg(icon) {
            return `http://openweathermap.org/img/wn/${icon}@2x.png`;
        };
        const { city } = this.state;
        const CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        Promise.all([
            fetch(CURRENT),
            fetch(FORECAST)
        ])
        .then(([res1, res2]) => {
            return Promise.all([res1.json(), res2.json()])
        })
        .then(([res1, res2]) => {
            const forecastArray = res2.list;
             //console.log(this.state.fiveDayForecast);
             const fiveDayForecast = [];
             //find 0,8, 16, 24, 32th item in fiveDayForecast
             for (let i = 0; i<forecastArray.length; i+=8) {
                fiveDayForecast.push(forecastArray[i]);
             }
             console.log(fiveDayForecast);


            this.setState({
                currentTemp: getTemp(res1.main.temp),
                currentWeather: res1.weather[0].main,
                currentCity: res1.name,
                currentWeatherIcon: getIconImg(res1.weather[0].icon),
                wind: res1.wind.speed,
                humidity: res1.main.humidity,
                maxTemp: getTemp(res1.main.temp_max),
                minTemp: getTemp(res1.main.temp_min),
                fiveDayForecast: fiveDayForecast,
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
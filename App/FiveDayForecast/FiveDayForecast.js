import React from 'react';

import styled from 'styled-components';
import Flex from '../../Components/Flex';

import { WeatherBlowingSnow, WeatherCloudy, WeatherDrizzle, 
    WeatherFog, WeatherPartlyCloudyDay, WeatherRain,
    WeatherSnowflake, WeatherSunny, WeatherThunderstorm, WeatherHaze } from '@styled-icons/fluentui-system-regular';

const ForecastWrapper = styled(Flex)`
    flex-direction: column;


`;

const ForecastItem = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    color: #e4e4e4;
    padding: 20px 6px;
    span {
        color: #ffffff;
    }
    &:hover {
        border-radius: 5px;
        box-shadow: 0px 0px 11px 1px #d4d8e2;
        transition: 0.1s ease-in;
    }
`;


class FiveDayForecast extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            weekday: 'Monday',
            weatherSymbol: 'Loading...',
            temp_min: '--',
            temp_max: '--',
        }
    }

    render () {
        const { weekday, weatherSymbol, temp_min, temp_max } = this.state;

        return (
            <ForecastWrapper>
                <ForecastItem>{weekday} <span>{weatherSymbol}</span> <span>{`${temp_min} / ${temp_max}`} &#176;C</span> </ForecastItem>
                <ForecastItem>{weekday} <span>{weatherSymbol}</span> <span>{`${temp_min} / ${temp_max}`} &#176;C</span> </ForecastItem>
                <ForecastItem>{weekday} <span>{weatherSymbol}</span> <span>{`${temp_min} / ${temp_max}`} &#176;C</span> </ForecastItem>
                <ForecastItem>{weekday} <span>{weatherSymbol}</span> <span>{`${temp_min} / ${temp_max}`} &#176;C</span> </ForecastItem>
                <ForecastItem>{weekday} <span>{weatherSymbol}</span> <span>{`${temp_min} / ${temp_max}`} &#176;C</span> </ForecastItem>

            </ForecastWrapper>


        )
    }
}

export default FiveDayForecast;
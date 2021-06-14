import React from 'react';

import styled from 'styled-components';
import Flex from '../../Components/Flex';

const ForecastWrapper = styled(Flex)`
    flex-direction: column;
`;

const ForecastItem = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
    color: #e4e4e4;
    div {
        padding-top: 20px;
        color: #ffffff;
    }
    img {
        width: 60px;
        height: 60px;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 5px 0px;
    }
`;


const FiveDayForecast = ({ fiveDayForecast }) => {

    const monthArr = [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
    ] 
    const getDate = (dt) => {
        const date = new Date(dt*1000);
        const month = monthArr[date.getMonth()];
        const day = date.getDate();
        return (`${day} ${month}`);
    }
    const getIcon = (icon) => {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    const getTemp = (temp) => {
        return Math.round(temp);
    }

    return (
    <ForecastWrapper>
    {
        fiveDayForecast.map(item => (
        <ForecastItem>
            <div>{getDate(item.dt)}</div>
            <img src={getIcon(item.weather[0].icon)} />
            <div>{getTemp(item.main.temp_max)} / {getTemp(item.main.temp_min)}</div></ForecastItem>            
        ))
        
    }
    </ForecastWrapper>
    )

}



export default FiveDayForecast;
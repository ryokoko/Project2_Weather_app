
import React from 'react';
import Flex from '../../Components/Flex';
import Header from '../Header'; 
import styled from 'styled-components';

const Container = styled.div`
    flex: 65%;
`;

const Overview = styled(Flex)`
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
const Temp = styled.div`
    font-size: 5rem;
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const City = styled.div`
    font-size: 3rem;
    padding: 0 2%;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Weather = styled.div`

`;
const WeatherIcon = styled.img`
    height: 60px;
    width: 60px;
`;
const WeatherStat = styled.div`
    font-size: 1.5rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;


const CurrentWeather = ( { currentCity, temp, icon, condition } ) => (
    
    <Container>
        <Header />
        <Overview>
            <Temp>{`${ temp }`} &#176;</Temp>
            <City>{`${ currentCity }`}</City>
            <Weather>
                <WeatherIcon src={icon}/>
                <WeatherStat>{`${ condition }`}</WeatherStat>
            </Weather>
        </Overview>
    </Container>


)

export default CurrentWeather;
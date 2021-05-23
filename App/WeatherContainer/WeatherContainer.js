import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    margin: 5% 8%;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 1px #f7f7f7;
    height: 600px;
    background-color: white;
`;

const WeatherBg = styled.div`
    width: 100%;
    height: 60%;
    background-image: url('.././src/Images/sunny.jpg');
    background-size: cover;
    border-radius: 10px 10px 0 0;
`;

const WeatherInfo = styled.div`
    width: 100%;
`;
const WeatherContainer = () => (
    <div>
        <Container>
            <WeatherBg />
            <WeatherInfo />
        </Container>
    </div>

)

export default WeatherContainer;
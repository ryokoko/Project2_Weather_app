import React from 'react';

import styled from 'styled-components';
import Flex from '../../Components/Flex';

const ForecastWrapper = styled(Flex)`
    flex-direction: column;
`;

const ForecastItem = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    color: #e4e4e4;
    padding: 15px 0px;
    span {
        color: #ffffff;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 5px 0px;
    }
`;


const FiveDayForecast = ({ fiveDayForecast }) => {
    console.log(fiveDayForecast);

    return (
        <ForecastWrapper>
        </ForecastWrapper>


    )
}


export default FiveDayForecast;
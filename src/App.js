import React, { Component } from 'react';
/* import Header from '../App/Header'; */
import WeatherContainer from '../App/WeatherContainer';
import Footer from '../App/Footer';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        html {
                height: 100%;
        }
        body {
                background-image: url('./src/Images/sunny.jpg'); /* 用的是html文件的relative path */
                background-size: auto;
                background-repeat: no-repeat;
                font-family: sans-serif;
                color: #757780;
                margin: 0px;
                padding: 0px;
                position: relative;
                height: 100%;
        }

`;

const Wrapper = styled.div`
        height: 100%;

`;
const App = () => (
        <Wrapper>
                <GlobalStyle />
                <WeatherContainer />
                <Footer />
        </Wrapper>   
)

export default App;
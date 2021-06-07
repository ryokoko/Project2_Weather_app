import React from 'react';
import styled from 'styled-components';

const DateContainer = styled.div`
  flex: 75%;
  text-align: center;
  @media (max-width: 768px) {
  font-size:0.9rem;
  }
`;

const CurrentDate = () => {
  return (
    <DateContainer>
    {new Date().toLocaleDateString()}
    </DateContainer>

  ) 
}

export default CurrentDate;
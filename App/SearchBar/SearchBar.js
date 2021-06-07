import React from 'react';

import styled from 'styled-components';
import Flex from '../../Components/Flex';
import { MagnifyingGlass } from '@styled-icons/open-iconic/MagnifyingGlass';

const SearchBarWrapper = styled.form`
    padding: 30px;
    position: relative;
    
`;

const SearchInput = styled.input`
    border: none;
    border-bottom:1.2px solid #cfcfd2;
    padding: 22px 5px 5px 0;
    background-color: transparent;
    font-size: 1.1rem;
    width: 70%;
    &:focus {
        outline:none;
    }

`;

const SubmitBtn = styled.input`
    background-color: #e6dace;
    border: none;
    width: 80px;
    height: 80px;
    font-size: 1.1rem;
    color: #777777;
    position: absolute;
    top: 0px;
    right: 0px;
    &:hover {
        cursor: pointer;
        background-color: #eee8e2;
        transition: ease-in-out;
    }

`;




const SearchBar = ({ city, onChange, onSearch }) => {
    return (
        <div>
            <SearchBarWrapper>
                <SearchInput 
                    value={city}
                    onChange={onChange}
                    type="text" 
                    id="location" 
                    name="location" 
                    placeholder="Search for city..." 
                />
                <SubmitBtn type="button" value="Search" onClick={onSearch} />
            </SearchBarWrapper>
         </div>
    )
}

export default SearchBar;
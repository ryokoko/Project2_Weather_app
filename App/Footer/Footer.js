import React from 'react';

import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';

const FooterText = styled.div`
    position: fixed;
    bottom:0;
    text-align: center;
    font-size: 0.7rem;
    width: 100%;
`;

const GithubIcon = styled(Github)`
        color: #82698f;
`;

const Footer = () => (
    <div>
        <FooterText>
            &#169; 2021 All rights reserved. Designed and created by Stella. <GithubIcon size='25' />
        </FooterText>
    </div>
    
)

export default Footer;
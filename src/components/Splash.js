import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { device } from './device';

  

export default function Splash() {
    function splash() {
        gsap.from('.splash', {duration: '3', opacity: '0',scale: '0'})
        
    }

    return (
        <SplashDiv>
            <h1 className = 'splash' ref = {splash}>Kevin11Jensen.com<br/>Coming Soon</h1>
            
        </SplashDiv>   
    )
}

const SplashDiv = styled.div `
    background-color: #0147fa;
    color: #f5fffa;
    height: 100vh;
    font-family: 'Share Tech Mono', monospace;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    overflow: hidden;
    @media ${device.desktopL} {
        font-size: 9rem;
    }
    @media ${device.desktop} {
        font-size: 8rem;
    }
    @media ${device.laptopL} {
        font-size: 7rem;
    }
    @media ${device.laptop} {
        font-size: 5rem;
    }
    @media ${device.tablet} {
        font-size: 3rem;
    }
    @media ${device.mobileL} {
        font-size: 2rem;
    }
    @media ${device.mobileM} {
        font-size: 1.6rem;
    }
    @media ${device.mobileS} {
        font-size: 1.2rem;
    }
    .splash {
        text-align: center;
        
        @media(max-width: 400px) {
            margin-bottom: 25%;
            
        }
    }
`
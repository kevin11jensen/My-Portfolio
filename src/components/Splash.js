import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';


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
    font-size: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    overflow: hidden;
    @media(max-width: 1080px) {
        font-size: 5rem;
    }
    @media(max-width: 850px) {
        font-size: 4rem;
    }
    @media(max-width: 600px) {
        font-size: 3rem;
    }
    @media(max-width: 400px) {
        font-size: 1.6rem;
    }
    .splash {
        text-align: center;
        
        @media(max-width: 400px) {
            margin-bottom: 25%;
            
        }
    }
`
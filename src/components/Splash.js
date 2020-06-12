import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';


export default function Splash() {
    function splash() {
        gsap.from('.splash', {x: '-500', y: '-500', duration: '3', rotate: '360', ease: 'bounce', fontSize: '2rem'})
        
    }
    return (
        <SplashDiv>
            <h1 className = 'splash' ref = {splash}>Welcome to Kevin11Jensen.com</h1>
        </SplashDiv>   
    )
}

const SplashDiv = styled.div `
    background-color: #0147fa;
    color: #f5fffa;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 99%;
    height: 100vh;
    font-size: 7rem;
    @media(max-width: 400px) {
        font-size: 3rem;
    }
`
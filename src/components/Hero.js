import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';


export default function Hero() {
    function powerup() {
        var tl = gsap.timeline();
            
            tl.from('header', {y: '100rem', duration: 9, ease: 'slow', opacity: '0'});
    }
    

    return (
        <Heading ref = {powerup}>
            <h3>Hero</h3>
        </Heading>
    );
}

const Heading = styled.header `
    background-color: #0147fa;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    h3 {
        margin: 6% 0;
        font-size: 7rem;
    }
    
`


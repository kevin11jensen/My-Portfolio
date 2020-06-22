import React from 'react';
import styled from 'styled-components';
// import gsap from 'gsap';
import NavBar from './NavBar.js';
import Hero from './Hero.js';

export default function LandingPage() {

    // function greenSockAni() {
    //     gsap.from('.welcome', {duration: '1', x: '-100', ease: 'bounce', backgroundColor: '#dbe6e0'});
    //     }
    //     function greenSock2() {
    //         gsap.from('.nav', {duration: '1', x: '-100', ease: 'bounce', backgroundColor: '#dbe6e0'});
    //         }

    return (
        <Div>
            <NavBar />
            <Hero />
            
        </Div>
    )
}

const Div = styled.div `
    background-color: rgba(0, 0, 0, 0);
`
import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { device } from './device';

export default function NavBar() {

    function welcome() {
        var tl = gsap.timeline();

            tl.from('nav', {x: '-333rem', duration: 6, ease: 'bounce', opacity: '0'});
            
            tl.from('.nav-links', {x: '50rem', duration: 1});
            
    }

    return (
        <Nav ref = {welcome}>

            <h2>Kevin11Jensen.com</h2>
            <div className = 'nav-links'>
                <p>What UP</p>
            </div>
        </Nav>
    )
}
const Nav = styled.nav `
overflow-x: hidden;
    color: #0147fa;
    background-color: rgba(4, 0, 244, 0.07);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 9% 3%;
    h2 {
        background-color: transparent;
        font-size: 4rem;
        
        @media ${device.mobileL} {
            font-size: 2rem;
        }
    }
    .nav-links {
        
    }
`


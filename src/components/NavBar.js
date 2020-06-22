import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

export default function NavBar() {

    // function greenSockAni() {
    //     gsap.from('.welcome', {duration: '1', x: '-100', ease: 'bounce', backgroundColor: '#dbe6e0'});
    //     }
    //     function greenSock2() {
    //         gsap.from('.nav', {duration: '1', x: '-100', ease: 'bounce', backgroundColor: '#dbe6e0'});
    //         }

    return (
        <Nav>

            <h1>Kevin11Jensen.com</h1>
            <div className = 'nav-links'>
                What UP
            </div>
        </Nav>
    )
}
const Nav = styled.div `
    margin-right: 3rem;
    visibility: visible;
    background-color: rgba(0, 0, 0, 0);
    h1 {
        background-color: transparent;

    }
    .nav-links {

    }
`


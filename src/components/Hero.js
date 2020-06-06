import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';


export default function Hero() {

    function greenSock() {
        gsap.set('h1', {transformOrigin: '50%'});
        gsap.to('h1', {duration: 2, rotation: '360', backgroundColor: "black", color: 'white', borderRadius: '100%', padding: '5rem', border: '5px solid blue', fontSize: '5rem'});
    }


    return (
        <div>
            <HeroStyle>
                <h1 onClick = {greenSock}>Lets<br/>Learn<br/> GreenSock!</h1>
            </HeroStyle>
        </div>
    )

}

const HeroStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    margin-top: 20%;
    h1 {
        font-size: 3rem;
        text-align: center;
        
    }
`
import React from 'react';
import styled from 'styled-components';

export default function NavBar() {

    return (

        <div>

            <StyledNav>
                <p>Welcome to Kevin11Jensen.com</p>
                
            </StyledNav>
    
        </div>
    )
}

const StyledNav = styled.nav `
    background-color: blue;
    color: white;
    h1 {
        font-size: 6rem;
        text-align: center;
    }
`

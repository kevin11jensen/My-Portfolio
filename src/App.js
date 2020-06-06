import React from 'react';
import gsap from 'gsap';
import './App.css';

import NavBar from './components/NavBar.js';


export default function App() {
  
  function greenSock() {
    gsap.to('h1', {duration: 2, x: 300});
  }
  
  return (

    <div>

      <NavBar />

      <h1 onClick = {greenSock}>Lets Learn Greensock!</h1>

    </div>
  )
}

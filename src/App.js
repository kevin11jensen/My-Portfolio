import React from 'react';
import gsap from 'gsap';
import './App.css';

//component imports
import Splash from './components/Splash.js';
import LandingPage from './components/LandingPage';


export default function App() {

  return (
    <div>
      <Splash />
      <LandingPage />
    </div>
  )
}


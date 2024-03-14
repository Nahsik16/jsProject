import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t1 =gsap.timeline();
    
   t1.from('#leftlogo img,h3',{ y: -100, duration: 2,delay:0});
   //t1.to('#page1 h1', { x: 100, duration: 2,delay:1,yoyo:true, stagger: 1.5})

  }, []);

  return (
    <>
    <div id="main">
    <nav id="navbar">
      <div id="leftlogo"><img src="./images/logoo-removebg-preview.png" >
        </img>
      </div>
      <div id="center">
        <h3>project</h3>
        <h3>about</h3>      
        <h3>contact</h3>
        
      </div>
      <div id='right'><button id='loginbut'>login</button></div>
    </nav>
      <div id="page1">
            <h1>change the</h1>
              <h1>course</h1>
      </div>
      <div id="video-container">
        <div id="play">PLAY</div>
       <video id="myVideo" autoplay loop muted src="./Oreo_ Bubbles Of Play.mp4"></video>
      </div>
    </div>

      
    </>
  )
}

export default App

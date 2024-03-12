import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    var t1 =gsap.timeline()
    t1.from('#navbar img,#center h1,#right',{ y: -100,duration:1,delay:1,opacity:0,repeat:3,stagger:0.5});
    
  }, []);

  return (
    <>
      <div id="main">
    <nav id="navbar">
      <div id="leftlogo"><img src="./images/logoo-removebg-preview.png" >
        </img>
      </div>
      <div id="center">
        <h1>project</h1>
        <h1>about</h1>
        <h1>contact</h1>
        
      </div>
      <div id='right'><button id='loginbut'>login</button></div>
    </nav>
      <div id="page1">
            <h1>change the course</h1>
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

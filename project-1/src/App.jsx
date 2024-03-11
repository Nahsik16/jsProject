import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
    <nav id="navbar">
      <div id="leftlogo"><img src="/images/brand_logo.png" >
        </img>
      </div>
      <div id="center">
        
      </div>
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

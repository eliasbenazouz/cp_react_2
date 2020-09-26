import React from 'react';
import logo from './logo.svg';
import imageInSrc from './imageInSrc.jpg'
import './App.css';
import './style.css'

function App() {
  return (
    <div className="App">
      <div style={{ border:"solid 1px black", maxWidth:"100vw" }}>
      <h1 className="title red">Your name here</h1>
      <div><br /></div>
      <img src={imageInSrc} ></img>
      <div><br /></div>
      <img src="./imageInPublic.jpg"></img>
      </div>
      <video width="320" height="240" controls="controls">
        <source src="./myVideo.mp4" type="video/mp4" ></source>
      </video>
    </div>
  );
}

export default App;

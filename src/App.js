import React from 'react';
import logo from './nevis.png';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="main-box">
        <div className="box1"> 
        <img src={logo} className="nevispic" alt="logo" />
        <h2>Joe Coucill</h2>
        <p class="sub">Junior Developer</p>
        <Aboutme/> 
        </div>
    </div>
  );
}
}

class Aboutme extends React.Component {
  render() {
  return(
    <div className="about-me">
    <h2>About Me</h2>
    </div>
  )
}
}

export default App;
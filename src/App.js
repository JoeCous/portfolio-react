import React from 'react';
import logo from './nevis.png';
import './App.css';
import Particles from 'react-particles-js'

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Particles params={particleOpt} className="nono" />
        <div className="lolo">
          <img src={logo} className="nevispic" alt="logo" />
          <h3>Hello, I'm Joe Coucill.</h3> 
          <p class="sub2">I'm a Junior Software Developer.</p>
          <button> About me </button>
        </div>
          <Aboutme/> 
      </div>
    );
  }
}

class Aboutme extends React.Component {
  render() {
    return (
      <div className="aboutme">
        <h3>About Me</h3> 
        <button> Work </button>
      </div>

    )
}
}


export default App;


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
      <div className="container1">
        <Particles params={particleOpt} className="nono" />
        <div className="main">
          <img src={logo} className="nevispic" alt="logo" />
          <h3 className="hello">Hello, I'm Joe Coucill.</h3> 
          <p class="sub2">I'm a Junior Software Developer.</p>
        <button> <a href="#aboutme">  About me </a> </button>
        </div>
          <Aboutme/> 
          <Work/> 
      </div>
    );
  }
}

class Aboutme extends React.Component {
  render() {
    return (
      <div className = "container2">
      <div className="about-me">
      <a name="aboutme"></a>
        <h3>About Me</h3> 
        <h4> 2007-2009</h4>
        <p> I have always had a passion for development and design and I started by studying a National diploma in Graphic design, which included basic web development.</p>
        
        <h4> 2009-20015</h4>
        <p> I previously worked as a Graphic Designer with a local print company. I was the only designer and worked across a variety of projects over six years.</p>
        
        <h4> 2015-2019</h4>
        <p> I started working at AO.com doing something completley different to design. As
        much as I enjoyed my time doing design, I just wanted to learn more and learn to build
        apps/websites from scratch.
      </p>

      <h4> 2019</h4>
      <p> Four years after working at AO.com I have now become an Apprentice Junior Developer. I am currently studying at Code Nation in Manchester and the course lasts 12 weeks. I will then
        return to AO.com as a Junior Developer.</p>

      <button> <a href="#work"> Work </a> </button>
      </div>
      </div>
    )
}
}

class Work extends React.Component {
  render() {
    return (
      <div className = "container3">
      <div className="work">
      <a name="work"></a>
      <h3>Work</h3> 
      </div>
      </div>
    )
}
}


export default App;


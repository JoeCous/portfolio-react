import React from 'react';
import logo from './nevis.png';
import twitter from './twitter.png';
import ps from './ps.svg'; 
import ai from './ai.svg'; 
import id from './id.svg'; 
import html from './htmlcss.png'; 

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
          <Contact/> 
      </div>
    );
  }
}

class Aboutme extends React.Component {
  render() {
    return (
      <div className = "container2">
      <a href="aboutme" name="aboutme"></a>
      <div className="about-me">
        <h3 className="aboutmeheader">About Me</h3> 
        <p className="line1"> I have always been interested in design and web development and have previously worked as a Graphic Designer.</p>
        <p className="line2">I am currently studying the Software Development course at Code Nation in Manchester. </p>
        <p className="line3"> During the course I have studied HTML 5, CSS3, Javascript, React and Node JS. Currently I am studying C# and .NET.</p> 

    <div className="aboutmeimages">
    <img src={ps} className="photoshop" alt="logo" />
    <img src={ai} className="illustrator" alt="logo" />
    <img src={id} className="indesign" alt="logo" />
    <img src={html} className="html" alt="logo" />
</div>

<button> <a href="#work" className="work"> Work </a> </button>
</div>
      </div>
    )
}
}
class Work extends React.Component {
  render() {
    return (
      <div className = "container3">
      <a href="work" name="work">WORK</a>
      <h3 className="worktitle">Work</h3> 
      <div className="work">
      <div className="imgwrap1">
      <a href="https://joecous.github.io/twitterclone/"><img src={twitter} alt="twitter" className="pic1"/></a>
      <p class="pic1des">Static Twitter Page</p>
      </div>
      <div className="imgwrap1">
      <a href="https://joecous.github.io/twitterclone/"><img src={twitter} alt="twitter" className="pic1"/></a>
      {/* <p class="pic1des">Static Twitter Page</p> */}
      </div>
      <div className="imgwrap1">
      <a href="https://joecous.github.io/twitterclone/"><img src={twitter} alt="twitter" className="pic1"/></a>
      {/* <p class="pic1des">Static Twitter Page</p> */}
      </div>
      <div className="imgwrap1">
      <a href="https://joecous.github.io/twitterclone/"><img src={twitter} alt="twitter" className="pic1"/></a>
      {/* <p class="picdes">Static Twitter Page</p> */}
      </div>
      </div>
      <button class="contact"> <a href="#contact"> Contact</a> </button>
      </div>
    )
}
}

class Contact extends React.Component {
  render() {
    return (
      <div className = "container4">
      <div className="contact">
      <h3 className="contact">Contact</h3> 

      <form>
        <p>Name:</p> <input type="text"/>
        <p>Email:</p> <input type="text"/>
        <p>Subject:</p> <input type="text"/>
        <p>Message:</p> <input type="text"/>
      </form>

      <div className="contactlinks">
      Mail
      github
      phone  
      </div> 
      
      </div>
      </div>
    )
}
}
export default App;


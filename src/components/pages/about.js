import React, { Component } from 'react'
import '../css/about.css'

import Github from '../../img/Github.png'
import LinkedIn from '../../img/Linkedin.png'
import VSCO from '../../img/Vsco.png'

import NavBar from '../header.js'

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h2 id="aboutMe">About</h2>
        <div id="pujanInfo">
          <p>Hello there! My name is Pujan Tandukar.</p>
          <p>
            I am currently studying Computer Science and Technology Arts and
            Media at University of Colorado Boulder.
          </p>
          <div>
            <img href="www.facebook.com" id="icons" src={Github} alt="Github" />
            <img id="linkedin" src={LinkedIn} alt="Linkedin" />
            <img id="icons" src={VSCO} alt="Vsco" />
          </div>
        </div>
      </div>
    )
  }
}

export default About

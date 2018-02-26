import React, { Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <div id="about" className="tile">
          <Link className="labelID" to="./about">
            About
          </Link>
        </div>

        <div id="projects" className="tile">
          <Link className="labelID" to="./projects">
            Projects
          </Link>
        </div>

        <div id="travel" className="tile">
          <Link className="labelID" to="./travel">
            Travel
          </Link>
        </div>

        <div id="extra" className="tile">
          <Link className="labelID" to="./extra">
            Extra
          </Link>
        </div>
      </div>
    )
  }
}

export default Home

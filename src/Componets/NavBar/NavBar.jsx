import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/src/assets/BC-Game-Logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img id='gameLogo' src={Logo} alt="logo" /></Link>
            <button id='togglerNavBar' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav mx-5">
                <li className="nav-item me-5">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">LeaderBoard</Link>
                </li>
              </ul>
                <div className="container-fluid">
                      <div className="d-flex justify-content-end">
                      <Link to="/login"><button className="btn btn-outline-success me-3">Login</button></Link>
                      <Link to="/register"><button className="btn btn-outline-danger">Register</button></Link>
                      </div>
                  </div>
            </div> 
          </div>
        </nav>
    </div>
  )
}

export default NavBar
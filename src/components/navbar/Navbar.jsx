import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import './Navbar.css'
import {AiOutlinePhone} from 'react-icons/ai'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://www.bakuelectronics.az/assets/img/logo.svg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="s-input">
        <input type="text" />
        <RiSearchLine className="s-icon"/>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active text-danger" aria-current="page" href="#">Kampaniyalar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
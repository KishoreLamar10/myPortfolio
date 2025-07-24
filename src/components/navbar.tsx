import React from 'react';
import './Navbar.css'; // <-- We'll define hover animation here

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4 fixed-top" style={{ backgroundColor: '#000' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4 text-white" href="#">AK10</a>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4 align-items-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="btn btn-white text-dark fw-semibold contact-button">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

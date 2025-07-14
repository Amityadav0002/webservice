import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Nav.css'; // Optional for custom styling

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">MyLogo</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/academics">Academics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/program">Program</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admission">Admission</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/campus-life">Campus Life</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

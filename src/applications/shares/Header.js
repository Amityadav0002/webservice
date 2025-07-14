import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <nav className="header-nav">
      <div className="container-fluid bg-blue py-2">
        <div className="row align-items-center">

          {/* Left-aligned navigation items */}
          <div className="col-md-6">
            <ul className="nav-list">
              <li><Link to="#">Notice</Link></li>
              <li><Link to="#">Admission Enquiry</Link></li>
              <li><Link to="#">Career</Link></li>
            </ul>
          </div>

          {/* Right-aligned login links */}
          <div className="col-md-6 d-flex justify-content-end align-items-center login-section">
            <div className="login-item">
              <img src="https://srmu.ac.in/themes/images/icon/login.png" alt="Login Icon" className="login-icon" />
              <Link to="Userlogin" className="login-link">Student Login</Link>
            </div>
            <div className="login-item">
              <img src="https://srmu.ac.in/themes/images/icon/login.png" alt="Login Icon" className="login-icon" />
              <Link to="#" className="login-link">Staff Login</Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

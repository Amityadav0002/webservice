import React from 'react';
import { Link } from 'react-router-dom';
 

export default function Sidebar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 sidebar'>
          <ul className='nav flex-column'>
           <li> <Link to="/Mydashboard/dashboard" className='nav-link'>Dashboard</Link></li>

            <li className='nav-item'><Link to="/Mydashboard/home" className='nav-link'>Home</Link></li>
            <li className='nav-item'><Link to="/Mydashboard/contact" className='nav-link'>Contact</Link></li>
            <li className='nav-item'><Link to="/Mydashboard/service" className='nav-link'>Service</Link></li>
            <li className='nav-item'><Link to="/Mydashboard/product" className='nav-link'>Product</Link></li>
            <li className='nav-item'><Link to="/Mydashboard/app" className='nav-link'>App</Link></li>
            <li className='nav-item'><Link to="/Mydashboard/props" className='nav-link'>Props</Link></li>
            <li className='nav-item'><Link to="/Mydashboard/chart" className='nav-link'>Chart</Link></li>
            <li className='nav-item'><Link to="/Mydashboard/settings" className='nav-link'>Settings</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
